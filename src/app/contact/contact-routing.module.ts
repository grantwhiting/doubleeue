import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactComponent} from './contact.component';
import {ContactResolver} from './contact.resolver';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
    resolve: { page: ContactResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
