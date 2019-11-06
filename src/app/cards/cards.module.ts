import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardsComponent} from './cards.component';
import {CardsResolver} from './cards.resolver';

@NgModule({
  imports: [CommonModule],
  declarations: [CardsComponent],
  exports: [CardsComponent],
  providers: [CardsResolver]
})
export class CardsModule { }
