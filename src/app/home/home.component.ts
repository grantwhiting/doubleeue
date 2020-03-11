import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {cardAnimation} from '../animations/card.animation';
import {ITestimonial} from '../types/testimonial.type';
import {IBanner} from '../types/banner.type';

@Component({
  selector: 'du-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [cardAnimation]
})
export class HomeComponent implements OnInit {
  testimonials: ITestimonial[];
  banner: IBanner[];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data
      .subscribe(({ data }) => Object.assign(this, {...data}));
  }
}
