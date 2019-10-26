import {AfterViewInit, Component, EventEmitter, OnDestroy, Output, ViewChild} from '@angular/core';
import {NavigationComponent} from '../navigation/navigation.component';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'du-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  @ViewChild(NavigationComponent, { static: false }) navComponent: NavigationComponent;
  @Output() toggleNavEmitter = new EventEmitter<void>();

  private unsubscribe = new Subject<void>();

  ngOnDestroy(): void {
    this.unsubscribe.next();
  }

  ngAfterViewInit(): void {
    this.navComponent.toggleMobileNavEmitter
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => this.toggleNavEmitter.emit());
  }
}
