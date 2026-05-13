import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CartService } from './cart.service';
import { ProductsService } from '../products/products.service';

import { CheckoutService } from './checkout.service';

describe('CheckoutService', () => {
  let service: CheckoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CheckoutService,
        {
          provide: CartService,
          useValue: {
            cart: () => ({}),
          },
        },
        {
          provide: ProductsService,
          useValue: {
            getProductsForCheckout: () => of([]),
          },
        },
      ],
    });
    service = TestBed.inject(CheckoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
