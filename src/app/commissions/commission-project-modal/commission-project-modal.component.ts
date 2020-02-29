import {Component, OnDestroy, OnInit} from '@angular/core';
import {IProject} from '../../types/project';
import {Subject} from 'rxjs';
import {ProjectsService} from '../../services/projects/projects.service';
import {takeUntil} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'du-custom-project-modal',
  templateUrl: './custom-project-modal.component.html'
})
export class CommissionProjectModalComponent implements OnInit, OnDestroy {
  id: number;
  project: IProject;

  private unsubscribe: Subject<void> = new Subject();

  constructor(
    private projectsService: ProjectsService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // Get route params
    this.activatedRoute.queryParams
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(params => this.id = params.itemId);

    this.projectsService.getProjectById(this.id)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(project => this.project = project);
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
