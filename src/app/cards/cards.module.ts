import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardsComponent} from './cards.component';
import {CardsResolver} from './cards.resolver';
import {ProductModule} from '../product/product.module';

@NgModule({
  imports: [
    CommonModule,
    ProductModule
  ],
  declarations: [ CardsComponent ],
  exports: [ CardsComponent ],
  providers: [ CardsResolver ]
})
export class CardsModule { }
