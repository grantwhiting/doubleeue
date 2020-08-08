import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {HomeResolver} from './home.resolver';
import {ProductModule} from '../product/product.module';
import {TestimonialComponent} from './testimonial/testimonial.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
    imports: [
      CommonModule,
      HomeRoutingModule,
      ProductModule,
      CarouselModule
    ],
    declarations: [HomeComponent, TestimonialComponent],
    exports: [HomeComponent],
    providers: [HomeResolver]
})
export class HomeModule {
}
