import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IProduct} from '../types/product.type';
import {IProjectIdAndImage} from '../types/project.type';
import {cardAnimation} from '../animations/card.animation';
import {fadeEnterLeaveAnimation} from '../animations/fade-enter-leave.animation';
import {ProjectModalTypeEnum} from '../types/modal-type.enum';
import {WeddingContactModalComponent} from './wedding-contact-modal/wedding-contact-modal.component';

@Component({
  selector: 'du-weddings',
  templateUrl: './weddings.component.html',
  styleUrls: ['./weddings.component.scss'],
  animations: [cardAnimation, fadeEnterLeaveAnimation]
})
export class WeddingsComponent implements OnInit {
  pod: IProduct;
  weddingProjects: IProjectIdAndImage[];
  modalTypeEnum = ProjectModalTypeEnum;
  WeddingContactModal = WeddingContactModalComponent;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data
      .subscribe(({ data }) => Object.assign(this, {...data}));
  }
}
