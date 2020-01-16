import {NgModule} from '@angular/core';
import {
  ModalContainerBodyDirective,
  ModalContainerComponent, ModalContainerFooterDirective,
  ModalContainerTitleDirective
} from './modal-container.component';
import { ModalGalleryComponent } from './modal-gallery/modal-gallery.component';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    ModalContainerComponent,
    ModalContainerTitleDirective,
    ModalContainerBodyDirective,
    ModalGalleryComponent,
    ModalContainerFooterDirective
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [
    ModalContainerComponent,
    ModalContainerTitleDirective,
    ModalContainerBodyDirective,
    ModalGalleryComponent,
    ModalContainerFooterDirective
  ]
})
export class ModalContainerModule {}
