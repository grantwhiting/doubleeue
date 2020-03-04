import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IProduct} from '../types/product.type';
import {IProjectIdAndImage} from '../types/project.type';
import {cardAnimation} from '../animations/card.animation';
import {fadeEnterLeaveAnimation} from '../animations/fade-enter-leave.animation';
import {ProjectModalTypeEnum} from '../types/modal-type.enum';

@Component({
  selector: 'du-commissions',
  templateUrl: './commissions.component.html',
  styleUrls: ['./commissions.component.scss'],
  animations: [cardAnimation, fadeEnterLeaveAnimation]
})
export class CommissionsComponent implements OnInit {
  pod: IProduct;
  commissionProjects: IProjectIdAndImage[];
  modalTypeEnum = ProjectModalTypeEnum;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data
      .subscribe(({ data }) => Object.assign(this, {...data}));
  }
}
