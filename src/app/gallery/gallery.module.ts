import {NgModule} from '@angular/core';
import {GalleryComponent} from './gallery.component';
import {ProductModule} from '../product/product.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    ProductModule,
    CommonModule
  ],
  declarations: [GalleryComponent],
  exports: [GalleryComponent]
})
export class GalleryModule {}
