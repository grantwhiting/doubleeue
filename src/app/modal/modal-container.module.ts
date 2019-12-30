import {NgModule} from '@angular/core';
import {
  ModalContainerBodyDirective,
  ModalContainerComponent,
  ModalContainerTitleDirective} from './modal-container.component';
import { ModalGalleryComponent } from './modal-gallery/modal-gallery.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    ModalContainerComponent,
    ModalContainerTitleDirective,
    ModalContainerBodyDirective,
    ModalGalleryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalContainerComponent,
    ModalContainerTitleDirective,
    ModalContainerBodyDirective,
    ModalGalleryComponent
  ]
})
export class ModalContainerModule {}
