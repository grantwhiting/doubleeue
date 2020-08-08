import {NgModule} from '@angular/core';
import {ModalContainerModule} from '../../modal/modal-container.module';
import {WeddingContactModalComponent} from './wedding-contact-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  imports: [
    ModalContainerModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [ WeddingContactModalComponent ],
  exports: [ WeddingContactModalComponent ]
})
export class WeddingContactModalModule {}
