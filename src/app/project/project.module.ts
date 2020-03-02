import {NgModule} from '@angular/core';
import {ProjectComponent} from './project.component';
import {ModalTriggerModule} from '../services/modal/modal-trigger/modal-trigger.module';

@NgModule({
  imports: [ModalTriggerModule],
  declarations: [ProjectComponent],
  exports: [ProjectComponent]
})
export class ProjectModule {}
