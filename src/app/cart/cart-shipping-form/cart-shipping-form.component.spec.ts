import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UntypedFormBuilder } from '@angular/forms';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

import { CartShippingFormComponent } from './cart-shipping-form.component';

describe('CartShippingFormComponent', () => {
  let component: CartShippingFormComponent;
  let fixture: ComponentFixture<CartShippingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartShippingFormComponent],
      providers: [provideNoopAnimations()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartShippingFormComponent);
    component = fixture.componentInstance;
    const fb = TestBed.inject(UntypedFormBuilder);
    fixture.componentRef.setInput(
      'shippingInfo',
      fb.group({
        firstName: [''],
        lastName: [''],
        address: [''],
        comment: [''],
      }),
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
