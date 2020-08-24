import {Component, ElementRef, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {StickyNavService} from '../../services/sticky-nav/sticky-nav.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'du-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit, OnDestroy {
  private unsubscribe = new Subject<void>();

  @HostBinding('class.duWrapper__stickyNav')
  stickyNav: boolean;

  @HostBinding('class.duWrapper__onHomepage')
  onHomePage: boolean;

  constructor(
    private stickyNavService: StickyNavService,
    private router: Router,
    public elementRef: ElementRef) {}

  ngOnInit() {
    this.router.events
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.onHomePage = event.url === '/';
        }
      });

    this.stickyNavService.isNavSticky
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(sticky => this.stickyNav = sticky);
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
