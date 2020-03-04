import {Component, Input} from '@angular/core';
import {IProjectIdAndImage} from '../types/project.type';
import {WeddingProjectModalComponent} from '../weddings/wedding-project-modal/wedding-project-modal.component';
import {CommissionProjectModalComponent} from '../commissions/commission-project-modal/commission-project-modal.component';
import {ProjectModalTypeEnum} from '../types/modal-type.enum';

@Component({
  selector: 'du-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @Input() projectIdAndImage: IProjectIdAndImage;
  @Input() type: string;
  commissionProjectModal = CommissionProjectModalComponent;
  weddingProjectModal = WeddingProjectModalComponent;
  modalTypeEnum = ProjectModalTypeEnum;
}
