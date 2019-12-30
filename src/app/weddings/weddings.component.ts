import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {IProduct} from '../types/product';
import {IProjectIdAndImage} from '../types/project';
import {ProjectsService} from '../services/projects/projects.service';

@Component({
  selector: 'du-weddings',
  templateUrl: './weddings.component.html',
  styleUrls: ['./weddings.component.scss']
})
export class WeddingsComponent implements OnInit, OnDestroy {
  pod: IProduct;
  weddingProjects: IProjectIdAndImage[];

  private unsubscribe: Subject<void> = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectsService) {}

  ngOnInit() {
    this.activatedRoute.data
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(({ pod }) => this.pod = pod);

    this.projectService.getWeddingProjects()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(weddings => this.weddingProjects = weddings);
  }

  ngOnDestroy() {
    this.unsubscribe.next();
  }
}
