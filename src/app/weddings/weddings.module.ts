import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WeddingsComponent} from './weddings.component';
import {WeddingsResolver} from './weddings.resolver';
import {GalleryModule} from '../gallery/gallery.module';

@NgModule({
  imports: [CommonModule, GalleryModule],
  declarations: [WeddingsComponent],
  exports: [WeddingsComponent],
  providers: [WeddingsResolver]
})
export class WeddingsModule { }
