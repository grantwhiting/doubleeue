import {Component, Directive} from '@angular/core';
import {ModalService} from '../services/modal/modal.service';
import {modalFadeAnimation, modalFadeScaleAnimation} from '../animations/modal.animation';

@Directive({ selector: 'du-modal-container-title' })
export class ModalContainerTitleDirective {}

@Directive({ selector: 'du-modal-container-body' })
export class ModalContainerBodyDirective {}

@Directive({ selector: 'du-modal-container-footer' })
export class ModalContainerFooterDirective {}

@Component({
  selector: 'du-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss'],
  animations: [modalFadeScaleAnimation, modalFadeAnimation]
})
export class ModalContainerComponent {

  constructor(private modalService: ModalService) {}

  closeModal() {
    this.modalService.close();
  }
}
