import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {StickyNavService} from '../../services/sticky-nav/sticky-nav.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'du-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit, OnDestroy {
  private unsubscribe = new Subject<void>();

  @HostBinding('class.duWrapper__stickyNav')
  stickyNav: boolean;

  constructor(private stickyNavService: StickyNavService) {}

  ngOnInit() {
    this.stickyNavService.isNavSticky
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(sticky => this.stickyNav = sticky);
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
