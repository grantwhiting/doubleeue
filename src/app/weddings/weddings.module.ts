import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WeddingsRoutingModule} from './weddings-routing.module';
import {WeddingsComponent} from './weddings.component';
import {WeddingsResolver} from './weddings.resolver';

@NgModule({
  imports: [
    CommonModule,
    WeddingsRoutingModule
  ],
  declarations: [WeddingsComponent],
  exports: [WeddingsComponent],
  providers: [WeddingsResolver]
})
export class WeddingsModule { }
