import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IProduct} from '../types/product';
import {IProjectIdAndImage} from '../types/project';
import {cardAnimation} from '../animations/card.animation';

@Component({
  selector: 'du-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss'],
  animations: [cardAnimation]
})
export class CustomComponent implements OnInit {
  pod: IProduct;
  commissionProjects: IProjectIdAndImage[];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data
      .subscribe(({ data }) => Object.assign(this, {...data}));
  }
}
