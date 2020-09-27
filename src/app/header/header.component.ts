import {AfterViewInit, Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {NavigationComponent} from '../navigation/navigation.component';
import {takeUntil} from 'rxjs/internal/operators/takeUntil';
import {Subject} from 'rxjs/internal/Subject';
import {StickyNavService} from '../services/sticky-nav/sticky-nav.service';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'du-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(NavigationComponent, { static: false }) navComponent: NavigationComponent;
  @Output() toggleNavEmitter = new EventEmitter<void>();
  stickyNav: boolean;
  onHomePage: boolean;

  private unsubscribe = new Subject<void>();

  constructor(
    private stickyNavService: StickyNavService,
    private router: Router) {

    router.events
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.onHomePage = event.url === '/';
        }
      });
  }

  ngOnInit() {
    this.stickyNavService.isNavSticky
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(sticky => this.stickyNav = sticky);
  }

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
