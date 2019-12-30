import {Component, HostListener, Input} from '@angular/core';
import {IProjectIdAndImage} from '../types/project';
import {ModalService} from '../services/modal/modal.service';
import {CustomProjectModalComponent} from '../custom/custom-project-modal/custom-project-modal.component';
import {WeddingProjectModalComponent} from '../weddings/wedding-project-modal/wedding-project-modal.component';

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
      : this.modalService.addModal(CustomProjectModalComponent, this.projectIdAndImage.id);
  }
}
