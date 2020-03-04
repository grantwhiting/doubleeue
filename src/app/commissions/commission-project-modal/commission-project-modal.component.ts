import {Component, OnDestroy, OnInit} from '@angular/core';
import {IProject} from '../../types/project.type';
import {Subject} from 'rxjs';
import {ProjectsService} from '../../services/projects/projects.service';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'du-commission-project-modal',
  templateUrl: './commission-project-modal.component.html'
})
export class CommissionProjectModalComponent implements OnInit, OnDestroy {
  id: number;
  project: IProject;

  private unsubscribe: Subject<void> = new Subject();

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.projectsService.getProjectById(this.id)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(project => this.project = project);
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
