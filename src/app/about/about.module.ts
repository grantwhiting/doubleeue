import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutRoutingModule} from './about-routing.module';
import {AboutComponent} from './about.component';
import {AboutResolver} from './about.resolver';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  declarations: [AboutComponent],
  exports: [AboutComponent],
  providers: [AboutResolver]
})
export class AboutModule { }
