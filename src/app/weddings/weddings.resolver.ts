import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {ProductsService} from '../services/products/products.service';
import {forkJoin} from 'rxjs';
import {ProjectsService} from '../services/projects/projects.service';
import {map} from 'rxjs/operators';
import {IProduct} from '../types/product';
import {IProjectIdAndImage} from '../types/project';

interface IWeddingComponentType {
  pod: IProduct;
  weddingProjects: IProjectIdAndImage[];
}

@Injectable()
export class WeddingsResolver implements Resolve<IWeddingComponentType> {

  private weddingsProductId = 13;

  constructor(
    private productsService: ProductsService,
    private projectsService: ProjectsService) { }

  resolve() {
    return forkJoin(
      this.productsService.getProductByProductId(this.weddingsProductId),
      this.projectsService.getWeddingProjects()
    ).pipe(map(allData => {
      return {
        pod: allData[0],
        weddingProjects: allData[1]
      };
    }));
  }
}
