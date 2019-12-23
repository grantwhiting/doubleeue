import {Component, HostListener, Input} from '@angular/core';
import {IProjectIdAndImage} from '../types/project';
import {ModalService} from '../services/modal/modal.service';

@Component({
  selector: 'du-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @Input() projectIdAndImage: IProjectIdAndImage;

  constructor(private modalService: ModalService) {}

  @HostListener('click')
  openProjectModal() {
    this.modalService.open('custom-project');
  }

  // project: IProject;

  // private unsubscribe: Subject<void> = new Subject();
  //
  // constructor(private projectService: ProjectsService) { }
  //
  // ngOnInit() {
  //   this.projectService.getProjectById(this.projectIdAndImage.id)
  //     .pipe(takeUntil(this.unsubscribe))
  //     .subscribe(project => this.project = project);
  // }
  //
  // ngOnDestroy() {
  //   this.unsubscribe.next();
  // }
}
