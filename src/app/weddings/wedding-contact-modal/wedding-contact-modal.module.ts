import {NgModule} from '@angular/core';
import {ModalContainerModule} from '../../modal/modal-container.module';
import {WeddingContactModalComponent} from './wedding-contact-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule, MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {CommonModule} from '@angular/common';

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
