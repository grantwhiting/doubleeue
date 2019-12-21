import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {ProductsService} from '../services/products/products.service';
import {IProduct} from '../types/product';

@Injectable()
export class CardsResolver implements Resolve<IProduct> {

  private cardsProductId = 17;

  constructor(private productsService: ProductsService) { }

  resolve() {
    return this.productsService.getProductByProductId(this.cardsProductId);
  }
}
