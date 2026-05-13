import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { ManageProductsComponent } from './manage-products.component';
import { ProductsService } from '../../products/products.service';
import { ManageProductsService } from './manage-products.service';

describe('ManageProductsComponent', () => {
  let component: ManageProductsComponent;
  let fixture: ComponentFixture<ManageProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, ManageProductsComponent],
      providers: [
        {
          provide: ProductsService,
          useValue: {
            getProducts: () => of([]),
          },
        },
        {
          provide: ManageProductsService,
          useValue: {
            uploadProductsCSV: () => of({}),
          },
        },
        {
          provide: ActivatedRoute,
          useValue: {},
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProductsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
