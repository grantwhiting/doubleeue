import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {IProduct} from '../types/product';
import {ProductsService} from '../services/products.service';

@Injectable()
export class CustomResolver implements Resolve<IProduct> {

  private customProductId = 15;

  constructor(private productsService: ProductsService) { }

  resolve() {
    return this.productsService.getProductByProductId(this.customProductId);
  }
}
