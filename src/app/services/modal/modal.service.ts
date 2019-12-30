import {ComponentFactoryResolver, Inject, Injectable, ViewContainerRef} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class ModalService {
  factoryResolver: ComponentFactoryResolver;
  rootViewContainer: ViewContainerRef;

  constructor(
    @Inject(ComponentFactoryResolver) factoryResolver,
    private router: Router) {

    this.factoryResolver = factoryResolver;
  }

  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef;
  }

  addModal(modal: any, id?: number) {
    const factory = this.factoryResolver.resolveComponentFactory(modal);
    const component = factory.create(this.rootViewContainer.injector);
    this.rootViewContainer.insert(component.hostView);

    if (id) {
      this.appendQueryStringToUrl(id);
    }
  }

  removeModal() {
    this.rootViewContainer.clear();
  }

  private appendQueryStringToUrl(id: number) {
    this.router.navigate([], {
      queryParams: {
        itemId: id
      },
      queryParamsHandling: 'merge'
    });
  }
}
