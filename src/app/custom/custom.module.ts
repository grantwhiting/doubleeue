import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomRoutingModule} from './custom-routing.module';
import {CustomComponent} from './custom.component';
import {CustomResolver} from './custom.resolver';

@NgModule({
  imports: [
    CommonModule,
    CustomRoutingModule
  ],
  declarations: [CustomComponent],
  exports: [CustomComponent],
  providers: [CustomResolver]
})
export class CustomModule { }
