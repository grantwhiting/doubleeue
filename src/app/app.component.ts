import {Component, OnDestroy, ViewChild} from '@angular/core';
import {MatDrawer} from '@angular/material';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnDestroy {
  @ViewChild(MatDrawer, { static: false }) matDrawer: MatDrawer;
  isExpanded = false;

  private unsubscribe = new Subject<void>();

  toggleNav(): void {
    this.matDrawer.openedChange
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(navOpen => this.isExpanded = navOpen);
    this.matDrawer.toggle();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
  }
}
