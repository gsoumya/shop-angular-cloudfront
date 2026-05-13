import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';

import { ManageProductsService } from './manage-products.service';
import { CONFIG_TOKEN } from '../../core/injection-tokens/config.token';
import { Config } from '../../../environments/config.interface';

describe('ManageProductsService', () => {
  let service: ManageProductsService;
  let httpMock: HttpTestingController;

  const baseConfig: Config = {
    production: false,
    apiEndpoints: {
      product: 'https://products.example.com',
      order: 'https://orders.example.com',
      import: 'https://import.example.com',
      bff: 'https://bff.example.com',
      cart: 'https://cart.example.com',
    },
    apiEndpointsEnabled: {
      product: false,
      order: false,
      import: true,
      bff: false,
      cart: false,
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ManageProductsService,
        provideHttpClient(),
        provideHttpClientTesting(),
        {
          provide: CONFIG_TOKEN,
          useValue: baseConfig,
        },
      ],
    });

    service = TestBed.inject(ManageProductsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should request signed URL and upload CSV', () => {
    const file = new File(['title,description,price,count'], 'products.csv', {
      type: 'text/csv',
    });

    let completed = false;

    service.uploadProductsCSV(file).subscribe({
      next: () => {
        completed = true;
      },
    });

    const signedUrlReq = httpMock.expectOne(
      (req) =>
        req.method === 'GET' &&
        req.url === 'https://import.example.com/import' &&
        req.params.get('name') === 'products.csv',
    );

    signedUrlReq.flush({ signedUrl: 'https://s3-upload.example.com/upload' });

    const uploadReq = httpMock.expectOne(
      (req) =>
        req.method === 'PUT' &&
        req.url === 'https://s3-upload.example.com/upload',
    );

    expect(uploadReq.request.headers.get('Content-Type')).toBe('text/csv');
    uploadReq.flush({ ok: true });

    expect(completed).toBeTrue();
  });

  it('should upload CSV when signed URL API returns a raw string', () => {
    const file = new File(['title,description,price,count'], 'products.csv', {
      type: 'text/csv',
    });

    service.uploadProductsCSV(file).subscribe();

    const signedUrlReq = httpMock.expectOne(
      (req) =>
        req.method === 'GET' &&
        req.url === 'https://import.example.com/import' &&
        req.params.get('name') === 'products.csv',
    );

    signedUrlReq.flush('https://s3-upload.example.com/upload');

    const uploadReq = httpMock.expectOne(
      (req) =>
        req.method === 'PUT' &&
        req.url === 'https://s3-upload.example.com/upload',
    );

    expect(uploadReq.request.headers.get('Content-Type')).toBe('text/csv');
    uploadReq.flush({ ok: true });
  });

  it('should not call API when import endpoint is disabled', () => {
    TestBed.resetTestingModule();

    TestBed.configureTestingModule({
      providers: [
        ManageProductsService,
        provideHttpClient(),
        provideHttpClientTesting(),
        {
          provide: CONFIG_TOKEN,
          useValue: {
            ...baseConfig,
            apiEndpointsEnabled: {
              ...baseConfig.apiEndpointsEnabled,
              import: false,
            },
          } as Config,
        },
      ],
    });

    const disabledService = TestBed.inject(ManageProductsService);
    const disabledHttpMock = TestBed.inject(HttpTestingController);

    const file = new File(['a,b'], 'products.csv', { type: 'text/csv' });
    let emitted = false;

    disabledService.uploadProductsCSV(file).subscribe({
      next: () => {
        emitted = true;
      },
    });

    disabledHttpMock.expectNone(() => true);

    expect(emitted).toBeFalse();
    disabledHttpMock.verify();
  });
});
