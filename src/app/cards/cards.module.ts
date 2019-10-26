import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardsRoutingModule} from './cards-routing.module';
import {CardsComponent} from './cards.component';
import {CardsResolver} from './cards.resolver';

@NgModule({
  imports: [
    CommonModule,
    CardsRoutingModule
  ],
  declarations: [CardsComponent],
  exports: [CardsComponent],
  providers: [CardsResolver]
})
export class CardsModule { }
