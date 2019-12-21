import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {NavigationService} from '../services/navigation/navigation.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {INavigationItems} from '../types/navigation-items';

@Component({
  selector: 'du-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {
  @Output() toggleMobileNavEmitter = new EventEmitter<void>();
  navItems: INavigationItems[];
  productNavItems: INavigationItems[];

  private unsubscribe = new Subject<void>();

  constructor(private navigationService: NavigationService) {}

  ngOnInit() {
    this.navigationService.getMainNavItems()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(items => this.navItems = items);
    this.navigationService.getProductsNavItems()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(items => this.productNavItems = items);
  }

  ngOnDestroy() {
    this.unsubscribe.next();
  }

  toggleMobileNav(): void {
    this.toggleMobileNavEmitter.emit();
  }
}
