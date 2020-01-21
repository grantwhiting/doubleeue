import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {IGalleryItem} from '../../types/gallery-item';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {modalGalleryAnimation} from '../../animations/modal-gallery.animation';
import {fadeEnterLeaveAnimation} from '../../animations/fade-enter-leave.animation';

@Component({
  selector: 'du-modal-gallery',
  templateUrl: './modal-gallery.component.html',
  styleUrls: ['./modal-gallery.component.scss'],
  animations: [modalGalleryAnimation, fadeEnterLeaveAnimation]
})
export class ModalGalleryComponent implements OnInit, OnDestroy {
  @Input() imageList: IGalleryItem[];
  showNextTrigger = true;
  showPrevTrigger = false;
  currentSelectedIndex = 0;
  animationParams = {
    value: 'animationParams',
    params: {
      start: '100',
      leave: '-100'
    }
  };

  private selectionSubject = new Subject<number>();
  private unsubscribe = new Subject<void>();

  ngOnInit() {
    this.selectionSubject
      .pipe(takeUntil(this.unsubscribe))
      .subscribe({
        next: value => {
          this.showPrevTrigger = value !== 0;
          this.showNextTrigger = value !== (this.imageList.length - 1);
        }
    });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
  }

  showNext() {
    if (this.currentSelectedIndex === (this.imageList.length - 1)) {
      return;
    }
    this.currentSelectedIndex++;
    this.selectionSubject.next(this.currentSelectedIndex);
    this.animationParams.params.start = '100';
    this.animationParams.params.leave = '-100';
  }

  showPrevious() {
    if (this.currentSelectedIndex === 0) {
      return;
    }
    this.currentSelectedIndex--;
    this.selectionSubject.next(this.currentSelectedIndex);
    this.animationParams.params.start = '-100';
    this.animationParams.params.leave = '100';
  }
}
