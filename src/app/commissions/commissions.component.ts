import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IProduct} from '../types/product';
import {IProjectIdAndImage} from '../types/project';
import {cardAnimation} from '../animations/card.animation';
import {fadeEnterLeaveAnimation} from '../animations/fade-enter-leave.animation';

@Component({
  selector: 'du-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss'],
  animations: [cardAnimation, fadeEnterLeaveAnimation]
})
export class CommissionsComponent implements OnInit {
  pod: IProduct;
  commissionProjects: IProjectIdAndImage[];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data
      .subscribe(({ data }) => Object.assign(this, {...data}));
  }
}
