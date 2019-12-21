import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {IProduct} from '../types/product';
import {ProjectsService} from '../services/projects/projects.service';
import {IProjectIdAndImage} from '../types/project';

@Component({
  selector: 'du-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit, OnDestroy {
  pod: IProduct;
  customProjects: IProjectIdAndImage[];

  private unsubscribe: Subject<void> = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private projectsService: ProjectsService) { }

  ngOnInit() {
    this.activatedRoute.data
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(({ pod }) => this.pod = pod);

    this.projectsService.getCustomProjects()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(projects => {
        this.customProjects = projects;
      });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
  }
}
