import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IEmployee } from './employee';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  private _url: string = "/assets/data/employees.json"

  constructor( private http: HttpClient) {}

  getEmployee(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url)
    .pipe(
      catchError(this.errorhandler)
    )
                        
  }

  errorhandler(err : HttpErrorResponse) {
    return throwError(err.message)
  }
}
