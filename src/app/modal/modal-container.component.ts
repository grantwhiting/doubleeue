import {Component, Directive, ElementRef, Inject, Input, OnDestroy, OnInit} from '@angular/core';
import {ModalService} from '../services/modal/modal.service';
import { DOCUMENT } from '@angular/common';

@Directive({ selector: 'du-modal-container-title' })
export class ModalContainerTitleDirective {}

@Directive({ selector: 'du-modal-container-body' })
export class ModalContainerBodyDirective {}

@Component({
  selector: 'du-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss']
})
export class ModalContainerComponent implements OnInit, OnDestroy {
  @Input() id: string;

  private readonly element: any;

  constructor(
    private modalService: ModalService,
    private el: ElementRef,
    @Inject(DOCUMENT) private document: Document) {

    this.element = el.nativeElement;
  }

  ngOnInit() {
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    this.document.body.append(this.element);

    this.element.addEventListener('click', el => {
      if (el.target.className === 'modal') {
        this.close();
      }
    });

    this.modalService.add((this));
  }

  ngOnDestroy() {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  open(): void {
    this.element.style.display = 'block';
    this.document.body.classList.add('modal-open');
  }

  close(): void {
    this.element.style.display = 'none';
    this.document.body.classList.remove('modal-open');
  }
}
