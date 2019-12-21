import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {mainNavigationApi, productsNavigationApi} from '../apis';
import {INavigationItems} from '../../types/navigation-items';
import {Observable} from 'rxjs';

@Injectable()
export class NavigationService {

  constructor(private http: HttpClient) {}

  getMainNavItems(): Observable<INavigationItems[]> {
    return this.http.get<INavigationItems[]>(mainNavigationApi);
  }

  getProductsNavItems(): Observable<INavigationItems[]> {
    return this.http.get<INavigationItems[]>(productsNavigationApi);
  }
}
