import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectModule} from '../project/project.module';
import {CommissionsResolver} from './commissions.resolver';
import {CommissionsComponent} from './commissions.component';
import {CommissionsProjectModalModule} from './commission-project-modal/commission-project-modal.module';
import {CommissionProjectModalComponent} from './commission-project-modal/commission-project-modal.component';
import {MatButtonModule} from '@angular/material/button';
import {CommissionsContactModalComponent} from './commissions-contact-modal/commissions-contact-modal.component';
import {ModalTriggerModule} from '../services/modal/modal-trigger/modal-trigger.module';
import {CommissionContactModalModule} from './commissions-contact-modal/commission-contact-modal.module';

@NgModule({
  imports: [
    CommonModule,
    ProjectModule,
    CommissionsProjectModalModule,
    MatButtonModule,
    ModalTriggerModule,
    CommissionContactModalModule
  ],
  declarations: [CommissionsComponent],
  exports: [CommissionsComponent],
  providers: [CommissionsResolver],
  entryComponents: [
    CommissionProjectModalComponent,
    CommissionsContactModalComponent
  ]
})
export class CommissionsModule { }
