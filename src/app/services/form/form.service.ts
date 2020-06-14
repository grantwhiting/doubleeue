import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {GeneralForm} from '../../types/form-data.type';
import {WindowRef} from '../window/window.service';

@Injectable()
export class FormService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-WP-Nonce': this.windowRef.nativeWindow.nonce
    })
  };

  constructor(
    private http: HttpClient,
    private windowRef: WindowRef) { }

  postFormData(formData: GeneralForm, endpoint: string) {
    console.log(this.serialize(formData));
    return this.http.post<GeneralForm>(
      `${endpoint}`,
      this.serialize(formData),
      {headers: this.httpOptions.headers})
        .pipe(catchError(error => this.handleError(error)));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error.message}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  private serialize(obj: any): URLSearchParams {
    const params: URLSearchParams = new URLSearchParams();

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const element = obj[key];

        params.set(key, element);
      }
    }
    return params;
  }
}
