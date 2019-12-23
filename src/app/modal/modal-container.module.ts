import {NgModule} from '@angular/core';
import {ModalContainerBodyDirective, ModalContainerComponent, ModalContainerTitleDirective} from '../modal-container.component';

@NgModule({
  declarations: [
    ModalContainerComponent,
    ModalContainerTitleDirective,
    ModalContainerBodyDirective
  ],
  exports: [
    ModalContainerComponent,
    ModalContainerTitleDirective,
    ModalContainerBodyDirective
  ]
})
export class ModalContainerModule {}
