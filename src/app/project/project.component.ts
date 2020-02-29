import {Component, HostListener, Input} from '@angular/core';
import {IProjectIdAndImage} from '../types/project';
import {ModalService} from '../services/modal/modal.service';
import {WeddingProjectModalComponent} from '../weddings/wedding-project-modal/wedding-project-modal.component';
import {CommissionProjectModalComponent} from '../commissions/commission-project-modal/commission-project-modal.component';

@Component({
  selector: 'du-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @Input() projectIdAndImage: IProjectIdAndImage;
  @Input() type: string;

  constructor(private modalService: ModalService) {}

  @HostListener('click')
  openProjectModal() {
    this.type === 'wedding'
      ? this.modalService.addModal(WeddingProjectModalComponent, this.projectIdAndImage.id)
      : this.modalService.addModal(CommissionProjectModalComponent, this.projectIdAndImage.id);
  }
}
