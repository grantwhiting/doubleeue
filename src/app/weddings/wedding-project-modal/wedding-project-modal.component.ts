import {Component, OnDestroy, OnInit} from '@angular/core';
import {IProject} from '../../types/project';
import {Subject} from 'rxjs';
import {ProjectsService} from '../../services/projects/projects.service';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'du-wedding-project-modal',
  templateUrl: './wedding-project-modal.component.html',
  styleUrls: ['./wedding-project-modal.component.scss']
})
export class WeddingProjectModalComponent implements OnInit, OnDestroy {
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
