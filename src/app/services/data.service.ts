import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Data } from '../models/data';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = "http://localhost:3000/data";

  constructor( private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      console.log(
        `An error occurred ${error.status}, body was: ${error.error}`
      );
    } else {
      console.log(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    return throwError(
      'Something happened with request, please try again later.'
    );
  }

  getList(): Observable<Data[]> {
    return this.http
      .get<Data[]>(this.baseUrl)
      .pipe(retry(2), catchError(this.handleError));
  }

  createItem(item: any): Observable<Data> {
    return this.http
      .post<Data>(this.baseUrl, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  getNumeroCuotas(): Observable<number> {
    return this.getList().pipe(
      map((data: Data[]) => {
        // Suponiendo que 'numeroCuotas' es un campo en la estructura de Data
        // Aquí deberías implementar la lógica real para obtener el número total de cuotas
        // En este ejemplo, simplemente sumamos todas las 'numeroCuotas' de los datos
        return data.reduce((total, current) => total + current.numeroCuotas, 0);
      }),
      catchError(this.handleError)
    );
  }
}
