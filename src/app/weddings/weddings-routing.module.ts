import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WeddingsComponent} from './weddings.component';
import {WeddingsResolver} from './weddings.resolver';

const routes: Routes = [
  {
    path: '',
    component: WeddingsComponent,
    resolve: { items: WeddingsResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeddingsRoutingModule { }
