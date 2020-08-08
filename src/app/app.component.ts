import {Component, Inject, OnDestroy, ViewChild, ViewContainerRef} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {ModalService} from './services/modal/modal.service';
import {fadeScaleEnterLeaveAnimation} from './animations/fade-scale-enter-leave.animation';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss'],
  animations: [fadeScaleEnterLeaveAnimation]
})
export class AppComponent implements OnDestroy {
  @ViewChild(MatDrawer, { static: false }) matDrawer: MatDrawer;
  isExpanded = false;

  private unsubscribe = new Subject<void>();

  constructor(
    @Inject(ModalService) modalService,
    @Inject(ViewContainerRef) viewContainerRef) {
    modalService.setRootViewContainerRef(viewContainerRef);
  }

  toggleNav(): void {
    this.matDrawer.openedChange
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(navOpen => this.isExpanded = navOpen);
    this.matDrawer.toggle();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
