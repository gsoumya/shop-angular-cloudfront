import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { CONFIG_TOKEN } from './injection-tokens/config.token';
import { ApiService } from './api.service';

@Injectable()
class TestApiService extends ApiService {}

describe('ApiService', () => {
  let service: TestApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TestApiService,
        provideHttpClient(),
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
              product: true,
              order: true,
              import: true,
              bff: true,
              cart: true,
            },
          },
        },
      ],
    });
    service = TestBed.inject(TestApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
