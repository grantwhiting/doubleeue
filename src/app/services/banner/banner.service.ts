import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IBanner} from '../../types/banner.type';
import {bannerApi} from '../apis';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(private http: HttpClient) { }

  getBanner(): Observable<IBanner[]> {
    return this.http.get<IBanner[]>(bannerApi);
  }
}
