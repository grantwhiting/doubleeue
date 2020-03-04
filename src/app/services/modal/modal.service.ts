import {ComponentFactoryResolver, Inject, Injectable, ViewContainerRef} from '@angular/core';
import {Router} from '@angular/router';
import {KeyValueMap} from '../../types/map.type';

@Injectable()
export class ModalService {
  factoryResolver: ComponentFactoryResolver;
  rootViewContainer: ViewContainerRef;

  constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
    this.factoryResolver = factoryResolver;
  }

  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef;
  }

  open(modal: any, context: KeyValueMap) {
    const factory = this.factoryResolver.resolveComponentFactory(modal);
    const component = factory.create(this.rootViewContainer.injector);
    this.rootViewContainer.insert(component.hostView);

    if (context) {
      Object.assign(component.instance, context);
    }
  }

  close() {
    this.rootViewContainer.clear();
  }
}
