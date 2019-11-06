import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutComponent} from './about.component';
import {AboutResolver} from './about.resolver';

@NgModule({
  imports: [CommonModule],
  declarations: [AboutComponent],
  exports: [AboutComponent],
  providers: [AboutResolver]
})
export class AboutModule { }
