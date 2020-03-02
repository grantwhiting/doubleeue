import {NgModule} from '@angular/core';
import {ModalContainerModule} from '../../modal/modal-container.module';
import {CommissionProjectModalComponent} from './commission-project-modal.component';
import {ModalService} from '../../services/modal/modal.service';


@NgModule({
  imports: [ModalContainerModule],
  declarations: [CommissionProjectModalComponent],
  exports: [CommissionProjectModalComponent],
  providers: [ModalService]
})
export class CommissionsProjectModalModule {}
