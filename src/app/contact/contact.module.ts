import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactComponent} from './contact.component';
import {ContactResolver} from './contact.resolver';

@NgModule({
  imports: [CommonModule],
  declarations: [ContactComponent],
  exports: [ContactComponent],
  providers: [ContactResolver]
})
export class ContactModule { }
