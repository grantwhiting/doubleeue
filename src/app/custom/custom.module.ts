import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomComponent} from './custom.component';
import {CustomResolver} from './custom.resolver';
import {ProjectModule} from '../project/project.module';
import { CustomProjectModalComponent } from './custom-project-modal/custom-project-modal.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectModule
  ],
  declarations: [ CustomComponent, CustomProjectModalComponent ],
  exports: [ CustomComponent ],
  providers: [ CustomResolver ]
})
export class CustomModule { }
