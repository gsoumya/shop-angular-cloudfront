import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

import { CartComponent } from './cart.component';
import { CheckoutService } from './checkout.service';
import { CartService } from './cart.service';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartComponent],
      providers: [
        provideNoopAnimations(),
        {
          provide: CheckoutService,
          useValue: {
            getProductsForCheckout: () => of([]),
          },
        },
        {
          provide: CartService,
          useValue: {
            totalInCart: () => 0,
            addItem: () => undefined,
            removeItem: () => undefined,
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
