import {Component, Input} from '@angular/core';
import {IGalleryItem} from '../types/gallery-item';
import {IProductImage} from '../types/product-image';

@Component({
  selector: 'du-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  @Input() galleryItems: IGalleryItem[] | IProductImage[];
  @Input() id: number;
}
