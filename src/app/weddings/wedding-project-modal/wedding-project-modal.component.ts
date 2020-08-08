import {Component, OnDestroy, OnInit} from '@angular/core';
import {IProject} from '../../types/project.type';
import {Subject} from 'rxjs';
import {ProjectsService} from '../../services/projects/projects.service';
import {takeUntil} from 'rxjs/operators';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'du-wedding-project-modal',
  templateUrl: './wedding-project-modal.component.html'
})
export class WeddingProjectModalComponent implements OnInit, OnDestroy {
  id: number;
  project: IProject;
  carouselOptions: OwlOptions = {
    stagePadding: 9,
    loop: true,
    dots: true,
    navSpeed: 700,
    mouseDrag: true,
    touchDrag: true,
    responsive: {
      0: {
        items: 1
      }
    }
  };

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
