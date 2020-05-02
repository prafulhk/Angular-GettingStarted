import { Injectable } from '@angular/core';
import { Iproduct } from './pruductModel';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class ProductService {

    private productURL = 'api/products/products.json';
    constructor(private http: HttpClient) {
    }

    getProducts(): Observable<Iproduct[]> {
        return this.http.get<Iproduct[]>(this.productURL).pipe(
            tap(data => console.log('All : ' + JSON.stringify(data))),
            catchError(this.handleError));
    }
    private handleError(err: HttpErrorResponse) {
        let errorMessage: string;

        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occured:${err.error.message}`
        }
        else {
            errorMessage = `Server returened code:${err.status},error message is:${err.message}`
        }
        console.error(errorMessage);
        return throwError(errorMessage)
    }
}