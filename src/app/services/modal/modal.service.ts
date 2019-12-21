import { Injectable } from '@angular/core';
import { ModalContainerComponent } from '../../modal/modal-container.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals: ModalContainerComponent[] = [];

  add(modal: ModalContainerComponent) {
    this.modals.push(modal);
  }

  remove(id: string) {
    this.modals = this.modals.filter(modal => modal.id !== id);
  }

  open(id: string) {
    this.modals.find(modal => modal.id === id).open();
  }

  close(id: string) {
    this.modals.find(modal => modal.id === id).close();
  }
}
