import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about.component';
import {AboutResolver} from './about.resolver';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    resolve: { page: AboutResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
