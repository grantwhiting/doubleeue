import {AfterViewInit, Component, HostBinding, OnDestroy, ViewChild} from '@angular/core';
import {NavigationComponent} from './navigation/navigation.component';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {MatDrawer} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  @ViewChild(NavigationComponent, { static: false }) navComponent: NavigationComponent;
  @ViewChild('mobileNav', { static: false }) matDrawer: MatDrawer;
  @HostBinding('attr.aria-expanded') isExpanded = false;

  private unsubscribe = new Subject<void>();

  ngAfterViewInit(): void {
    this.navComponent.toggleMobileNavEmitter
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => this.toggleNav());
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
  }

  toggleNav(): void {
    this.matDrawer.toggle()
      .then(state => {
        state === 'open'
          ? this.isExpanded = true
          : this.isExpanded = false;
      });
  }
}
