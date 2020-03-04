import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import {TestimonialsService} from '../services/testimonials/testimonials.service';
import {ITestimonial} from '../types/testimonial.type';
import {IBanner} from '../types/banner.type';
import {BannerService} from '../services/banner/banner.service';
import {forkJoin} from 'rxjs';
import {map} from 'rxjs/operators';

interface IHomeContentType {
  testimonials: ITestimonial[];
  banner: IBanner[];
}

@Injectable()
export class HomeResolver implements Resolve<IHomeContentType> {

    constructor(
      private testimonialsService: TestimonialsService,
      private bannerService: BannerService) {}

    resolve() {
        return forkJoin(
          this.testimonialsService.getTestimonials(),
          this.bannerService.getBanner()
        ).pipe(map(allData => {
          console.log(allData);
          return {
            testimonials: allData[0],
            banner: allData[1]
          };
        }));
    }
}
