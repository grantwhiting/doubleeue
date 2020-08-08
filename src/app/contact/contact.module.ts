import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactComponent} from './contact.component';
import {ContactResolver} from './contact.resolver';
import {ReactiveFormsModule} from '@angular/forms';
import {FormService} from '../services/form/form.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [ContactComponent],
  exports: [ContactComponent],
  providers: [
    ContactResolver,
    FormService
  ]
})
export class ContactModule { }
