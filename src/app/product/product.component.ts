import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { IProductImage } from '../types/product-image';

@Component({
  selector: 'du-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() productImage: IProductImage;
}
