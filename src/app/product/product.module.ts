import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    RouterModule
  ],
  exports: [ProductComponent]
})
export class ProductModule {
}
