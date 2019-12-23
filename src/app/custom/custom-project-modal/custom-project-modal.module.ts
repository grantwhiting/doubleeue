import {NgModule} from '@angular/core';
import {ModalContainerModule} from '../../modal/modal-container.module';
import {CustomProjectModalComponent} from './custom-project-modal.component';

@NgModule({
  imports: [ ModalContainerModule ],
  declarations: [ CustomProjectModalComponent ],
  exports: [ CustomProjectModalComponent ]
})
export class CustomProjectModalModule {}
