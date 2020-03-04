import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {IProduct} from '../types/product.type';
import {ProductsService} from '../services/products/products.service';
import {forkJoin} from 'rxjs';
import {ProjectsService} from '../services/projects/projects.service';
import {map} from 'rxjs/operators';
import {IProjectIdAndImage} from '../types/project.type';

interface ICommissionsComponentType {
  pod: IProduct;
  commissionProjects: IProjectIdAndImage[];
}

@Injectable()
export class CommissionsResolver implements Resolve<ICommissionsComponentType> {

  private commissionsProductId = 113;

  constructor(
    private productsService: ProductsService,
    private projectsService: ProjectsService) { }

  resolve() {
    return forkJoin(
      this.productsService.getProductByProductId(this.commissionsProductId),
      this.projectsService.getCommissionProjects()
    ).pipe(map(allData => {
      return {
        pod: allData[0],
        commissionProjects: allData[1]
      };
    }));
  }
}
