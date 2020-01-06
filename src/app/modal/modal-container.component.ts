import {Component, ComponentFactoryResolver, Directive, ElementRef, Inject, Input, OnDestroy, OnInit} from '@angular/core';
import {ModalService} from '../services/modal/modal.service';
import { DOCUMENT } from '@angular/common';

@Directive({ selector: 'du-modal-container-title' })
export class ModalContainerTitleDirective {}

@Directive({ selector: 'du-modal-container-body' })
export class ModalContainerBodyDirective {}

@Directive({ selector: 'du-modal-container-footer' })
export class ModalContainerFooterDirective {}

@Component({
  selector: 'du-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss']
})
export class ModalContainerComponent {

  constructor(private modalService: ModalService) {}

  closeModal() {
    this.modalService.removeModal();
  }
}
