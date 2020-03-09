import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import {NavigationService} from '../services/navigation/navigation.service';
import {Observable} from 'rxjs';
import {INavigationItem} from '../types/navigation-items.type';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[duMobileNavigation]',
  templateUrl: './mobile-navigation.component.html',
  styleUrls: ['./mobile-navigation.component.scss']
})
export class MobileNavigationComponent implements OnInit {
  @Output() toggleNavEmitter = new EventEmitter<void>();
  @HostBinding('attr.aria-expanded') @Input() duMobileNavigation = false;
  navItems$: Observable<INavigationItem[]>;

  constructor(private navigationService: NavigationService) {}

  ngOnInit() {
    this.navItems$ = this.navigationService.getMainNavItems();
  }

  toggleNav() {
    this.toggleNavEmitter.emit();
  }
}
