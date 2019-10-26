import {Component, HostBinding, ViewChild} from '@angular/core';
import {MatDrawer} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  @ViewChild('mobileNav', { static: false }) matDrawer: MatDrawer;
  @HostBinding('attr.aria-expanded') isExpanded = false;

  toggleNav(): void {
    this.matDrawer.toggle()
      .then(state => {
        state === 'open'
          ? this.isExpanded = true
          : this.isExpanded = false;
      });
  }
}
