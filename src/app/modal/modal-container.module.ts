import {NgModule} from '@angular/core';
import {
  ModalContainerBodyDirective,
  ModalContainerComponent, ModalContainerFooterDirective,
  ModalContainerTitleDirective
} from './modal-container.component';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    ModalContainerComponent,
    ModalContainerTitleDirective,
    ModalContainerBodyDirective,
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
    ModalContainerFooterDirective
  ]
})
export class ModalContainerModule {}
