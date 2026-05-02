import { Injectable } from '@angular/core';

import { EMPTY, Observable, of, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from './product.interface';

import { ApiService } from '../core/api.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService extends ApiService {
  private static readonly EDIT_NOT_SUPPORTED_ERROR =
    'Edit product is not supported by the configured Product API. Enable "bff" endpoint for edit support.';

  private toInteger(value: unknown): number {
    const parsed = Number(value);

    if (!Number.isFinite(parsed)) {
      return 0;
    }

    return Math.trunc(parsed);
  }

  createNewProduct(product: Product): Observable<Product> {
    if (this.endpointEnabled('product')) {
      const url = this.getUrl('product', 'products');
      const payload = {
        title: product.title,
        description: product.description,
        price: this.toInteger(product.price),
      };

      return this.http
        .post<
          Omit<Product, 'count'> & Partial<Pick<Product, 'count'>>
        >(url, payload)
        .pipe(
          map((createdProduct) => ({
            ...createdProduct,
            count: createdProduct.count ?? 0,
          })),
        );
    }

    if (!this.endpointEnabled('bff')) {
      console.warn(
        'Endpoint "product" and "bff" are disabled. To enable change your environment.ts config',
      );
      return EMPTY;
    }

    const url = this.getUrl('bff', 'products');
    return this.http.post<Product>(url, product);
  }

  editProduct(id: string, changedProduct: Product): Observable<Product> {
    if (!this.endpointEnabled('bff')) {
      return throwError(
        () => new Error(ProductsService.EDIT_NOT_SUPPORTED_ERROR),
      );
    }

    const url = this.getUrl('bff', `products/${id}`);
    return this.http.put<Product>(url, changedProduct);
  }

  getProductById(id: string): Observable<Product | null> {
    if (this.endpointEnabled('product')) {
      const url = this.getUrl('product', `products/${id}`);
      return this.http.get<Product>(url);
    }

    if (!this.endpointEnabled('bff')) {
      console.warn(
        'Endpoint "product" and "bff" are disabled. To enable change your environment.ts config',
      );
      return this.http
        .get<Product[]>('/assets/products.json')
        .pipe(
          map(
            (products) => products.find((product) => product.id === id) || null,
          ),
        );
    }

    const url = this.getUrl('bff', `products/${id}`);
    return this.http
      .get<{ product: Product }>(url)
      .pipe(map((resp) => resp.product));
  }

  getProducts(): Observable<Product[]> {
    if (this.endpointEnabled('product')) {
      const url = this.getUrl('product', 'products');
      return this.http.get<Product[]>(url);
    }

    if (!this.endpointEnabled('bff')) {
      console.warn(
        'Endpoint "product" and "bff" are disabled. To enable change your environment.ts config',
      );
      return this.http.get<Product[]>('/assets/products.json');
    }

    const url = this.getUrl('bff', 'products');
    return this.http.get<Product[]>(url);
  }

  getProductsForCheckout(ids: string[]): Observable<Product[]> {
    if (!ids.length) {
      return of([]);
    }

    return this.getProducts().pipe(
      map((products) => products.filter((product) => ids.includes(product.id))),
    );
  }
}
