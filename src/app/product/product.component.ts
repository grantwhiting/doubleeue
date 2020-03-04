import {Component, Input, OnInit} from '@angular/core';
import { IProductImage } from '../types/product-image.type';

@Component({
  selector: 'du-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() productImage: IProductImage | string;
  @Input() slug: string;
  displayImage: IProductImage | string;

  ngOnInit() {
    if (typeof this.productImage === 'string') {
      this.displayImage = this.productImage;
    } else {
      this.displayImage = this.productImage.guid;
    }
  }
}
