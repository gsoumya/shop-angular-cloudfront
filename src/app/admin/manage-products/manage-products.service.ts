import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { ApiService } from '../../core/api.service';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class ManageProductsService extends ApiService {
  uploadProductsCSV(file: File): Observable<unknown> {
    if (!this.endpointEnabled('import')) {
      console.warn(
        'Endpoint "import" is disabled. To enable change your environment.ts config',
      );
      return EMPTY;
    }

    return this.getPreSignedUrl(file.name).pipe(
      switchMap((url) =>
        this.http.put(url, file, {
          headers: {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Content-Type': 'text/csv',
          },
        }),
      ),
    );
  }

  private getPreSignedUrl(fileName: string): Observable<string> {
    const url = this.getUrl('import', 'import');
    const authorizationToken = localStorage.getItem('authorization_token');
    const requestOptions: {
      params: { name: string };
      headers?: Record<string, string>;
    } = {
      params: {
        name: fileName,
      },
    };

    if (authorizationToken) {
      requestOptions.headers = {
        Authorization: `Basic ${authorizationToken}`,
      };
    }

    return this.http
      .get<{ signedUrl: string } | string>(url, requestOptions)
      .pipe(
        map((res) => {
          if (typeof res === 'string') {
            return res;
          }

          return res.signedUrl;
        }),
      );
  }
}
