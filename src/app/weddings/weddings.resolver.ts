import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {ProductsService} from '../services/products/products.service';
import {forkJoin, Observable} from 'rxjs';
import {ProjectsService} from '../services/projects/projects.service';
import {map, tap} from 'rxjs/internal/operators';
import {IProduct} from '../types/product.type';
import {IProjectIdAndImage} from '../types/project.type';

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

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
      Observable<IWeddingComponentType> | Promise<IWeddingComponentType> | IWeddingComponentType {
      const data: IWeddingComponentType = {
        pod: null,
        weddingProjects: null
      };
      return forkJoin([
        this.productsService.getProductByProductId(this.weddingsProductId)
          .pipe(tap((product: IProduct) => data.pod = product)),
        this.projectsService.getWeddingProjects()
          .pipe(tap((weddingProjects: IProjectIdAndImage[]) => data.weddingProjects = weddingProjects))
      ]).pipe(map(() => data));
    }
}
