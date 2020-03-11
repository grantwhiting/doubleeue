import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeResolver } from './home.resolver';
import {ProductModule} from '../product/product.module';
import {CarouselContainerModule} from '../carousel-container/carousel-container.module';
import { TestimonialComponent } from './testimonial/testimonial.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ProductModule,
    CarouselContainerModule
  ],
    declarations: [HomeComponent, TestimonialComponent],
    exports: [HomeComponent],
    providers: [HomeResolver]
})
export class HomeModule {
}
