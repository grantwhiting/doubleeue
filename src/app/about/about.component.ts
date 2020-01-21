import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {IPage} from '../types/page';
import {fadeEnterLeaveAnimation} from '../animations/fade-enter-leave.animation';

@Component({
  selector: 'du-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [fadeEnterLeaveAnimation]
})
export class AboutComponent implements OnInit, OnDestroy {
  pageContent: IPage;

  private unsubscribe: Subject<void> = new Subject();

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(({ page }) => this.pageContent = page);
  }

  ngOnDestroy() {
    this.unsubscribe.next();
  }
}
