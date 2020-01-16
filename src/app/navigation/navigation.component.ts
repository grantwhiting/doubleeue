import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {NavigationService} from '../services/navigation/navigation.service';
import {forkJoin, Subject} from 'rxjs';
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
    forkJoin(
      this.navigationService.getMainNavItems(),
      this.navigationService.getProductsNavItems()
    )
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(data => {
        this.navItems = data[0];
        this.productNavItems = data[1];
      });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
  }

  toggleMobileNav(): void {
    this.toggleMobileNavEmitter.emit();
  }
}
