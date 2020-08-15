import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {cardAnimation} from '../animations/card.animation';
import {ITestimonial} from '../types/testimonial.type';
import {IPage} from '../types/page.type';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'du-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [cardAnimation]
})
export class HomeComponent implements OnInit {
  testimonials: ITestimonial[];
  pageContent: IPage;
  carouselOptions: OwlOptions = {
    stagePadding: 9,
    loop: true,
    dots: true,
    navSpeed: 700,
    mouseDrag: true,
    touchDrag: true,
    responsive: {
      0: {
        items: 1
      },
      992: {
        items: 2
      }
    }
  };

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data
      .subscribe(({data}) => Object.assign(this, {...data}));
  }
}
