import {AfterViewInit, Component, EventEmitter, OnDestroy, Output, ViewChild} from '@angular/core';
import {NavigationComponent} from '../navigation/navigation.component';
import {takeUntil} from 'rxjs/internal/operators/takeUntil';
import {Subject} from 'rxjs/internal/Subject';

@Component({
  selector: 'du-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  @ViewChild(NavigationComponent, { static: false }) navComponent: NavigationComponent;
  @Output() toggleNavEmitter = new EventEmitter<void>();

  private unsubscribe = new Subject<void>();

  ngAfterViewInit() {
    this.navComponent.toggleMobileNavEmitter
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => this.toggleNavEmitter.emit());
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
