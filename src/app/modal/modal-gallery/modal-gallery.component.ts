import {Component, Input} from '@angular/core';
import {modalGalleryAnimation} from './modal-gallery.animation';
import {IGalleryItem} from '../../types/gallery-item';

@Component({
  selector: 'du-modal-gallery',
  templateUrl: './modal-gallery.component.html',
  styleUrls: ['./modal-gallery.component.scss'],
  animations: [modalGalleryAnimation]
})
export class ModalGalleryComponent {
  @Input() imageList: IGalleryItem[];
  currentSelection = 0;
  animationParams = {
    value: 'animationParams',
    params: {
      start: '100',
      leave: '-100'
    }
  };

  ngOnInit() {
    console.log(this.imageList);
  }

  showNext() {
    if (this.currentSelection > 1) {
      return;
    }
    this.currentSelection++;
    this.animationParams.params.start = '100';
    this.animationParams.params.leave = '-100';
  }

  showPrevious() {
    if (this.currentSelection < 1) {
      return;
    }
    this.currentSelection--;
    this.animationParams.params.start = '-100';
    this.animationParams.params.leave = '100';
  }
}
