import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarouselContainerComponent, CarouselSlideTemplateDirective} from './carousel-container.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    CarouselContainerComponent,
    CarouselSlideTemplateDirective
  ],
  exports: [
    CarouselContainerComponent,
    CarouselSlideTemplateDirective
  ],
  imports: [
    CommonModule,
    CarouselModule
  ]
})
export class CarouselContainerModule { }
