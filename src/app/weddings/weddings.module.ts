import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WeddingsComponent} from './weddings.component';
import {WeddingsResolver} from './weddings.resolver';
import {ProjectModule} from '../project/project.module';
import { WeddingProjectModalComponent } from './wedding-project-modal/wedding-project-modal.component';
import {ModalContainerModule} from '../modal/modal-container.module';

@NgModule({
  imports: [CommonModule, ProjectModule, ModalContainerModule],
  declarations: [ WeddingsComponent, WeddingProjectModalComponent ],
  exports: [ WeddingsComponent ],
  providers: [ WeddingsResolver ]
})
export class WeddingsModule { }
