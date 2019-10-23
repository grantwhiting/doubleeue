import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'du-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  @Output() toggleMobileNavEmitter = new EventEmitter<boolean>();
  isNavOpen = false;

  toggleMobileNav(): void {
    this.isNavOpen = !this.isNavOpen;
    this.toggleMobileNavEmitter.emit(this.isNavOpen);
  }
}
