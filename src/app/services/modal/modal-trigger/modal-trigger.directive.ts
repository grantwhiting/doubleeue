import {Directive, HostListener, Input, Type} from '@angular/core';
import {ModalService} from '../modal.service';
import {KeyValueMap} from '../../../types/map.type';

@Directive({
  selector: '[duModalTrigger]'
})
export class ModalTriggerDirective {
  @Input() modalContext: KeyValueMap;
  @Input() set duModalTrigger(content: Type<unknown>) {
    this.content = content;
  }

  private content: Type<unknown>;

  constructor(private modalService: ModalService) { }

  @HostListener('click', ['$event'])
  onClick(e: Event) {
    e.preventDefault();
    this.modalService.open(this.content, this.modalContext);
  }
}
