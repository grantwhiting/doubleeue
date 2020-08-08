import {NgModule} from '@angular/core';
import {ModalContainerModule} from '../../modal/modal-container.module';
import {WeddingProjectModalComponent} from './wedding-project-modal.component';
import {ModalService} from '../../services/modal/modal.service';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [ModalContainerModule, CarouselModule, CommonModule],
  declarations: [WeddingProjectModalComponent],
  exports: [WeddingProjectModalComponent],
  providers: [ModalService]
}) export class WeddingProjectModalModule {}
