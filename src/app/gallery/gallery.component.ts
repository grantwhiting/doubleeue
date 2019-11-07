import {Component, Input} from '@angular/core';
import {IGalleryItem} from '../types/gallery-item';

@Component({
  selector: 'du-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  @Input() galleryItems: IGalleryItem[];
}
