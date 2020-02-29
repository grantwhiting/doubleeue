import {NgModule} from '@angular/core';
import {ModalContainerModule} from '../../modal/modal-container.module';
import {CommissionProjectModalComponent} from './commission-project-modal.component';


@NgModule({
  imports: [ ModalContainerModule ],
  declarations: [ CommissionProjectModalComponent ],
  exports: [ CommissionProjectModalComponent ]
})
export class CommissionsProjectModalModule {}
