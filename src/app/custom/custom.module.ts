import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomComponent} from './custom.component';
import {CustomResolver} from './custom.resolver';
import {ProjectModule} from '../project/project.module';
import {CustomProjectModalModule} from './custom-project-modal/custom-project-modal.module';

@NgModule({
  imports: [
    CommonModule,
    ProjectModule,
    CustomProjectModalModule
  ],
  declarations: [ CustomComponent ],
  exports: [CustomComponent],
  providers: [ CustomResolver ]
})
export class CustomModule { }
