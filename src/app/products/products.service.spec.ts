import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { ProductsService } from './products.service';
import { CONFIG_TOKEN } from '../core/injection-tokens/config.token';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductsService,
        provideHttpClient(),
        provideHttpClientTesting(),
        {
          provide: CONFIG_TOKEN,
          useValue: {
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
          },
        },
      ],
    });
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
