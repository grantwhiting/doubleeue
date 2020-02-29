import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {mainNavigationApi, productsNavigationApi} from '../apis';
import {INavigationItem} from '../../types/navigation-items';
import {Observable} from 'rxjs';

@Injectable()
export class NavigationService {

  constructor(private http: HttpClient) {}

  getMainNavItems(): Observable<INavigationItem[]> {
    return this.http.get<INavigationItem[]>(mainNavigationApi);
  }
}
