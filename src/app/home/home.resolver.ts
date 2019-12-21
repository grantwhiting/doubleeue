import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ProductsService } from '../services/products/products.service';
import { IProduct } from '../types/product';

@Injectable()
export class HomeResolver implements Resolve<IProduct[]> {

    constructor(private productsService: ProductsService) {}

    resolve() {
        return this.productsService.getProducts();
    }
}
