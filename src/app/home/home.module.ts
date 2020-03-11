import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeResolver } from './home.resolver';
import {ProductModule} from '../product/product.module';
import {CarouselContainerModule} from '../carousel-container/carousel-container.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ProductModule,
    CarouselContainerModule
  ],
    declarations: [HomeComponent],
    exports: [HomeComponent],
    providers: [HomeResolver]
})
export class HomeModule {
}
