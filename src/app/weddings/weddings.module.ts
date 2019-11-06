import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WeddingsComponent} from './weddings.component';
import {WeddingsResolver} from './weddings.resolver';

@NgModule({
  imports: [CommonModule],
  declarations: [WeddingsComponent],
  exports: [WeddingsComponent],
  providers: [WeddingsResolver]
})
export class WeddingsModule { }
