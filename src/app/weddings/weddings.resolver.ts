import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {ProductsService} from '../services/products.service';
import {IProduct} from '../types/product';

@Injectable()
export class WeddingsResolver implements Resolve<IProduct> {

  private weddingsProductId = 13;

  constructor(private productsService: ProductsService) { }

  resolve() {
    return this.productsService.getProductByProductId(this.weddingsProductId);
  }
}
