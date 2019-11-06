import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactRoutingModule} from './contact-routing.module';
import {ContactComponent} from './contact.component';
import {ContactResolver} from './contact.resolver';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule
  ],
  declarations: [ContactComponent],
  exports: [ContactComponent],
  providers: [ContactResolver]
})
export class ContactModule { }
