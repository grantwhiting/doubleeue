import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomComponent} from './custom.component';
import {CustomResolver} from './custom.resolver';

const routes: Routes = [
  {
    path: '',
    component: CustomComponent,
    resolve: { items: CustomResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomRoutingModule { }
