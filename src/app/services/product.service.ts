import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../interfaces/product';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("https://localhost:7102/GetAllProducts").pipe(tap(_ => console.log('fetched products')),
      catchError(this.handleError<Product[]>('getProducts', [])));
  }
  getProduct(id: number): Observable<Product>
  {
    return this.http.get<Product>(`https://localhost:7102/GetProductById?id=${id}`).pipe(tap(_ => console.log('fetched product')),
      catchError(this.handleError<Product>('getProduct')));
  }
  private handleError<T>(operation = 'operation', result ?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
