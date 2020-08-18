import {Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {NavigationService} from '../services/navigation/navigation.service';
import {Observable, Subject} from 'rxjs';
import {INavigationItem} from '../types/navigation-items.type';
import {WindowRef} from '../services/window/window.service';
import {StickyNavService} from '../services/sticky-nav/sticky-nav.service';
import {fadeScaleEnterAnimation} from '../animations/fade-scale-enter.animation';
import {Router} from '@angular/router';

@Component({
  selector: 'du-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [fadeScaleEnterAnimation]
})
export class NavigationComponent implements OnInit, OnDestroy {
  @Input() truncateHeader: boolean;
  @Output() toggleMobileNavEmitter = new EventEmitter<void>();
  navItems$: Observable<INavigationItem[]>;

  private unsubscribe = new Subject<void>();
  private hostTopPosition: number;
  private lastScrollTop: number;

  @HostBinding('class.duNavigation__sticky')
  navIsSticky: boolean;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const windowScrollYOffset = this.windowRef.nativeWindow.pageYOffset;
    if (windowScrollYOffset > this.lastScrollTop) {
      // scrolling down
      if (windowScrollYOffset >= this.elementRef.nativeElement.getBoundingClientRect().top + windowScrollYOffset) {
        this.navIsSticky = true;
        this.stickyNavService.setIsNavSticky(true);
      }
    } else {
      // scrolling up
      if (windowScrollYOffset <= this.hostTopPosition + 15) {
        this.navIsSticky = false;
        this.stickyNavService.setIsNavSticky(false);
      }
    }
    // set scroll position
    this.lastScrollTop = windowScrollYOffset <= 0 ? 0 : windowScrollYOffset;
  }

  constructor(
    private windowRef: WindowRef,
    private elementRef: ElementRef,
    private navigationService: NavigationService,
    private stickyNavService: StickyNavService,
    private router: Router) {
  }

  ngOnInit() {
    this.navItems$ = this.navigationService.getMainNavItems();
    this.hostTopPosition = this.elementRef.nativeElement.getBoundingClientRect().top;
    this.lastScrollTop = this.windowRef.nativeWindow.pageYOffset;
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  toggleMobileNav() {
    this.toggleMobileNavEmitter.emit();
  }

  routeToShop() {
    this.router.navigate(['https://www.etsy.com/shop/DoubleEueDesignCo'])
  }
}
