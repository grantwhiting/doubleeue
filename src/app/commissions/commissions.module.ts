import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectModule} from '../project/project.module';
import {CommissionsResolver} from './commissions.resolver';
import {CommissionsComponent} from './commissions.component';
import {CommissionsProjectModalModule} from './commission-project-modal/commission-project-modal.module';
import {CommissionProjectModalComponent} from './commission-project-modal/commission-project-modal.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectModule,
    CommissionsProjectModalModule
  ],
  declarations: [CommissionsComponent],
  exports: [CommissionsComponent],
  providers: [CommissionsResolver],
  entryComponents: [CommissionProjectModalComponent]
})
export class CommissionsModule { }
