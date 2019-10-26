import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CardsComponent} from './cards.component';
import {CardsResolver} from './cards.resolver';

const routes: Routes = [
  {
    path: '',
    component: CardsComponent,
    resolve: { items: CardsResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsRoutingModule { }
