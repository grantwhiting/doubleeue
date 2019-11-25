import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomComponent} from './custom.component';
import {CustomResolver} from './custom.resolver';
import {GalleryModule} from '../gallery/gallery.module';

@NgModule({
  imports: [CommonModule, GalleryModule],
  declarations: [CustomComponent],
  exports: [CustomComponent],
  providers: [CustomResolver]
})
export class CustomModule { }
