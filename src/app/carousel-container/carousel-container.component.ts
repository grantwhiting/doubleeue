import {Component, ContentChildren, Directive, QueryList, TemplateRef} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Directive({ selector: '[duCarouselSlideTemplate]' })
export class CarouselSlideTemplateDirective {}

@Component({
  selector: 'du-carousel-container',
  templateUrl: './carousel-container.component.html',
  styleUrls: ['./carousel-container.component.scss']
})
export class CarouselContainerComponent {
  @ContentChildren(CarouselSlideTemplateDirective, { read: TemplateRef })
  carouselSlideTemplates: QueryList<TemplateRef<CarouselSlideTemplateDirective>>;
  carouselOptions: OwlOptions = {
    stagePadding: 9,
    loop: true,
    dots: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      992: {
        items: 2
      }
    }
  };
}
