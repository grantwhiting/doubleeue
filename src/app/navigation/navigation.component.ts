import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NavigationService} from '../services/navigation/navigation.service';
import {Observable} from 'rxjs';
import {INavigationItem} from '../types/navigation-items.type';

@Component({
  selector: 'du-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Output() toggleMobileNavEmitter = new EventEmitter<void>();
  navItems$: Observable<INavigationItem[]>;

  constructor(private navigationService: NavigationService) {}

  ngOnInit() {
    this.navItems$ = this.navigationService.getMainNavItems();
  }

  toggleMobileNav(): void {
    this.toggleMobileNavEmitter.emit();
  }
}
