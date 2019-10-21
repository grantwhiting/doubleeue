import {Component, HostBinding} from '@angular/core';
import {expandHeightShowHideAnimation} from '../animations/expandHeightShowHideAnimation';

@Component({
  selector: 'du-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [expandHeightShowHideAnimation]
})
export class NavigationComponent {
  @HostBinding('attr.aria-expanded') isExpanded = false;
  animationState = 'collapsed';

  triggerMobileNav(): void {
    this.isExpanded = !this.isExpanded;
    if (this.isExpanded) {
      this.animationState = 'expanded';
    } else {
      this.animationState = 'collapsed';
    }
  }
}
