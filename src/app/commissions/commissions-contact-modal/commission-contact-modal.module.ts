import {NgModule} from '@angular/core';
import {CommissionsContactModalComponent} from './commissions-contact-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ModalContainerModule} from '../../modal/modal-container.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    ModalContainerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [CommissionsContactModalComponent],
  exports: [CommissionsContactModalComponent]
})
export class CommissionContactModalModule {}
