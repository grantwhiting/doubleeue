import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {pagesApi} from '../apis';
import {IPage} from '../../types/page';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor(private http: HttpClient) { }

  getPageById(pageId: number): Observable<IPage> {
    return this.http.get<IPage>(`${pagesApi}/${pageId}`);
  }
}
