import {Component, Input} from '@angular/core';
import {ITestimonial} from '../../types/testimonial.type';

@Component({
  selector: 'du-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent {
  @Input() testimonial: ITestimonial;
}
