import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardsComponent} from './cards.component';
import {CardsResolver} from './cards.resolver';
import {GalleryModule} from '../gallery/gallery.module';

@NgModule({
  imports: [
    CommonModule,
    GalleryModule
  ],
  declarations: [CardsComponent],
  exports: [CardsComponent],
  providers: [CardsResolver]
})
export class CardsModule { }
