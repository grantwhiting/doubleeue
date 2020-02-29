import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectModule} from '../project/project.module';
import {CommissionsResolver} from './commissions.resolver';
import {CommissionsComponent} from './commissions.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectModule
  ],
  declarations: [CommissionsComponent],
  exports: [CommissionsComponent],
  providers: [CommissionsResolver]
})
export class CommissionsModule { }
