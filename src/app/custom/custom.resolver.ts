import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {IProduct} from '../types/product';
import {ProductsService} from '../services/products/products.service';
import {forkJoin} from 'rxjs';
import {ProjectsService} from '../services/projects/projects.service';
import {map} from 'rxjs/operators';
import {IProjectIdAndImage} from '../types/project';

interface ICommossionsComponentType {
  pod: IProduct;
  commissionProjects: IProjectIdAndImage[];
}

@Injectable()
export class CustomResolver implements Resolve<ICommossionsComponentType> {

  private customProductId = 15;

  constructor(
    private productsService: ProductsService,
    private projectsService: ProjectsService) { }

  resolve() {
    return forkJoin(
      this.productsService.getProductByProductId(this.customProductId),
      this.projectsService.getCustomProjects()
    ).pipe(map(allData => {
      return {
        pod: allData[0],
        commissionProjects: allData[1]
      };
    }));
  }
}
