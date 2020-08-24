import {AfterViewInit, Component, ElementRef, HostBinding, Inject, OnDestroy, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {ModalService} from './services/modal/modal.service';
import {fadeScaleEnterLeaveAnimation} from './animations/fade-scale-enter-leave.animation';
import {MatDrawer} from '@angular/material/sidenav';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';
import {HeaderComponent} from './header/header.component';
import {NavigationEnd, Router} from '@angular/router';
import {BannerService} from './services/banner/banner.service';
import {IBanner} from './types/banner.type';
import {StickyNavService} from './services/sticky-nav/sticky-nav.service';
import {WrapperComponent} from './layout/wrapper/wrapper.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss'],
  animations: [fadeScaleEnterLeaveAnimation]
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatDrawer) matDrawer: MatDrawer;
  @ViewChild(HeaderComponent, { read: ElementRef }) headerElement: ElementRef;
  isExpanded = false;
  banner: IBanner;
  stickyNav: boolean;

  private unsubscribe = new Subject<void>();
  private headerHeight: number;

  // Set nav height because it loads from a service and the height isn't added to the header until it's loaded
  // TODO This is hacky -- find a better solution
  private navHeight = 56;

  @HostBinding('style')
  get style(): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(
      `--header__height: ${this.headerHeight + this.navHeight}px`)
  }

  @HostBinding('class.app__onHomepage')
  onHomePage: boolean;

  constructor(
    @Inject(ModalService) modalService,
    @Inject(ViewContainerRef) viewContainerRef,
    private bannerService: BannerService,
    private router: Router,
    private stickyNavService: StickyNavService,
    private sanitizer: DomSanitizer) {
    modalService.setRootViewContainerRef(viewContainerRef);

    router.events
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.onHomePage = event.url === '/';
        }
      });
  }

  ngOnInit() {
    // Get banner for homepage
    this.bannerService.getBanner()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(banner => this.banner = banner[0]);

    this.stickyNavService.isNavSticky
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(sticky => this.stickyNav = sticky);
  }

  ngAfterViewInit() {
    this.headerHeight = this.headerElement.nativeElement.clientHeight;
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  toggleNav() {
    this.matDrawer.openedChange
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(navOpen => this.isExpanded = navOpen);
    this.matDrawer.toggle();
  }

  scrollToWrapper(element: WrapperComponent) {
    element.elementRef.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }
}
