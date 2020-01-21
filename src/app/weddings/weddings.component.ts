import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IProduct} from '../types/product';
import {IProjectIdAndImage} from '../types/project';
import {cardAnimation} from '../animations/card.animation';
import {fadeEnterLeaveAnimation} from '../animations/fade-enter-leave.animation';

@Component({
  selector: 'du-weddings',
  templateUrl: './weddings.component.html',
  styleUrls: ['./weddings.component.scss'],
  animations: [cardAnimation, fadeEnterLeaveAnimation]
})
export class WeddingsComponent implements OnInit {
  pod: IProduct;
  weddingProjects: IProjectIdAndImage[];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data
      .subscribe(({ data }) => Object.assign(this, {...data}));
  }
}
