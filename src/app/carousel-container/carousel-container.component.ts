import {AfterContentInit, Component, ContentChildren, Directive, QueryList, TemplateRef} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Directive({ selector: '[duCarouselSlideTemplate]' })
export class CarouselSlideTemplateDirective {}

@Component({
  selector: 'du-carousel-container',
  templateUrl: './carousel-container.component.html',
  styleUrls: ['./carousel-container.component.scss']
})
export class CarouselContainerComponent implements AfterContentInit {
  @ContentChildren(CarouselSlideTemplateDirective, { read: TemplateRef })
  carouselSlideTemplates: QueryList<TemplateRef<CarouselSlideTemplateDirective>>;

  carouselOptions: OwlOptions = {
    loop: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    }
  };

  ngAfterContentInit() {
    console.log(this.carouselSlideTemplates);
  }
}
