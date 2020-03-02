import {NgModule} from '@angular/core';
import {ModalContainerModule} from '../../modal/modal-container.module';
import {WeddingProjectModalComponent} from './wedding-project-modal.component';
import {ModalService} from '../../services/modal/modal.service';

@NgModule({
  imports: [ModalContainerModule],
  declarations: [WeddingProjectModalComponent],
  exports: [WeddingProjectModalComponent],
  providers: [ModalService]
}) export class WeddingProjectModalModule {}
