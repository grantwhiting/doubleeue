import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WeddingsComponent} from './weddings.component';
import {WeddingsResolver} from './weddings.resolver';
import {ProjectModule} from '../project/project.module';
import { WeddingProjectModalComponent } from './wedding-project-modal/wedding-project-modal.component';
import {WeddingProjectModalModule} from './wedding-project-modal/wedding-project-modal.module';
import {WeddingContactModalModule} from './wedding-contact-modal/wedding-contact-modal.module';
import {MatButtonModule} from '@angular/material';
import {ModalTriggerModule} from '../services/modal/modal-trigger/modal-trigger.module';
import {WeddingContactModalComponent} from './wedding-contact-modal/wedding-contact-modal.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectModule,
    WeddingProjectModalModule,
    WeddingContactModalModule,
    MatButtonModule,
    ModalTriggerModule
  ],
  declarations: [WeddingsComponent],
  exports: [WeddingsComponent],
  providers: [WeddingsResolver],
  entryComponents: [
    WeddingProjectModalComponent,
    WeddingContactModalComponent
  ]
})
export class WeddingsModule { }
