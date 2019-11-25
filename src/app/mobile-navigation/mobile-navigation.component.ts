import {Component, EventEmitter, HostBinding, Input, Output} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[duMobileNavigation]',
  templateUrl: './mobile-navigation.component.html',
  styleUrls: ['./mobile-navigation.component.scss']
})
export class MobileNavigationComponent {
  @Output() toggleNavEmitter = new EventEmitter<void>();
  @HostBinding('attr.aria-expanded') @Input() duMobileNavigation = false;

  toggleNav() {
    this.toggleNavEmitter.emit();
  }
}
