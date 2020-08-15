import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {TestimonialsService} from '../services/testimonials/testimonials.service';
import {ITestimonial} from '../types/testimonial.type';
import {BannerService} from '../services/banner/banner.service';
import {zip} from 'rxjs';
import {map} from 'rxjs/operators';
import {PagesService} from '../services/pages/pages.service';
import {IPage} from '../types/page.type';

interface IHomeContentType {
  testimonials: ITestimonial[];
  pageContent: IPage;
}

@Injectable()
export class HomeResolver implements Resolve<IHomeContentType> {
  private homePage = 141;

  constructor(
    private testimonialsService: TestimonialsService,
    private bannerService: BannerService,
    private pagesService: PagesService) {}

  resolve() {
      return zip(
        this.testimonialsService.getTestimonials(),
        this.pagesService.getPageById(this.homePage)
      ).pipe(
        map(allData => {
          return {
            testimonials: allData[0],
            pageContent: allData[1]
          };
      }));
  }
}
