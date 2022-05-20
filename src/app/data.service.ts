import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  HttpClient,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl: string = 'https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001';
  constructor(private http: HttpClient) { }


  getData(): Observable<any>{
    let API_URL = `${this.apiUrl}`;
    return this.http.get(API_URL).pipe(catchError(this.error));
  }

  //Error Handling
  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
