import {NgModule} from '@angular/core';
import {ProjectComponent} from './project.component';
import {ModalService} from '../services/modal/modal.service';

@NgModule({
  declarations: [ProjectComponent],
  exports: [ProjectComponent],
  providers: [ModalService]
})
export class ProjectModule {}
