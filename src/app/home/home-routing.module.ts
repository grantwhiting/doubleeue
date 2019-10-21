import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from  '@angular/router';
import { HomeResolver } from './home.resolver';
import { HomeComponent } from './home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        resolve: { items: HomeResolver }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
