import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  // root makes it available in the entire application
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  // dummy url, the api endpoint goes here
  private productUrl = '/assets/products.json';

  // provide list of products to components using the service
  //   getProducts(): IProduct[] {
  //     return [
  //       {
  //         productId: 2,
  //         productName: 'Hammer',
  //         productCode: 'GDN-0023',
  //         releaseDate: 'March 18, 2021',
  //         description: 'Claw steel hammer',
  //         price: 8.9,
  //         starRating: 4.8,
  //         imageUrl: 'assets/images/hammer.png',
  //       },
  //     ];
  //   }
  // }

  // how we make a req to the server to get products using observables
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      // use tap and stringify to view the data
      tap((data) => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  // get individual product
  getProduct(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(this.productUrl);
  }

  // handle any errors
  handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status} with error: ${err.error.message}`;
    }
    return throwError(() => errorMessage);
  }
}
