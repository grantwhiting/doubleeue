import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {IProduct} from '../types/product.type';
import {ProductsService} from '../services/products/products.service';
import {forkJoin, Observable, zip} from 'rxjs';
import {ProjectsService} from '../services/projects/projects.service';
import {map, tap} from 'rxjs/operators';
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

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
      Observable<ICommissionsComponentType> | Promise<ICommissionsComponentType> | ICommissionsComponentType {
      const data: ICommissionsComponentType = {
        pod: null,
        commissionProjects: null
      };
      return forkJoin([
        this.productsService.getProductByProductId(this.commissionsProductId)
          .pipe(tap((product: IProduct) => data.pod = product)),
        this.projectsService.getCommissionProjects()
          .pipe(tap((commissionProjects: IProjectIdAndImage[]) => data.commissionProjects = commissionProjects))
        ]
      ).pipe(map(() => data));
    }
}
