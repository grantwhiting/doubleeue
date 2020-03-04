import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ITestimonial} from '../../types/testimonial.type';
import {testimonialsApi} from '../apis';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {

  constructor(private http: HttpClient) { }

  getTestimonials(): Observable<ITestimonial[]> {
    return this.http.get<ITestimonial[]>(testimonialsApi);
  }
}
