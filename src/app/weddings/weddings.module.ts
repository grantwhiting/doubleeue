import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WeddingsComponent} from './weddings.component';
import {WeddingsResolver} from './weddings.resolver';
import {ProjectModule} from '../project/project.module';
import { WeddingProjectModalComponent } from './wedding-project-modal/wedding-project-modal.component';
import {WeddingProjectModalModule} from './wedding-project-modal/wedding-project-modal.module';
import {WeddingContactModalModule} from './wedding-contact-modal/wedding-contact-modal.module';

@NgModule({
  imports: [
    CommonModule,
    ProjectModule,
    WeddingProjectModalModule,
    WeddingContactModalModule
  ],
  declarations: [WeddingsComponent],
  exports: [WeddingsComponent],
  providers: [WeddingsResolver],
  entryComponents: [WeddingProjectModalComponent]
})
export class WeddingsModule { }
