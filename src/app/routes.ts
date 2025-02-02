import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {WeddingsComponent} from './weddings/weddings.component';
import {HomeResolver} from './home/home.resolver';
import {AboutResolver} from './about/about.resolver';
import {ContactResolver} from './contact/contact.resolver';
import {WeddingsResolver} from './weddings/weddings.resolver';
import {CommissionsComponent} from './commissions/commissions.component';
import {CommissionsResolver} from './commissions/commissions.resolver';
import {NotFoundComponent} from './not-found/not-found.component';

export const routes: Routes = [
  { path: 'product/cards', redirectTo: 'cards', pathMatch: 'full' },
  { path: 'product/commissions', redirectTo: 'commissions', pathMatch: 'full' },
  { path: 'product/weddings', redirectTo: 'weddings', pathMatch: 'full' },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    resolve: { data: HomeResolver }
  },
  {
    path: 'weddings',
    component: WeddingsComponent,
    resolve: { data: WeddingsResolver }
  },
  {
    path: 'commissions',
    component: CommissionsComponent,
    resolve: { data: CommissionsResolver }
  },
  {
    path: 'about',
    component: AboutComponent,
    resolve: { page: AboutResolver }
  },
  {
    path: 'contact',
    component: ContactComponent,
    resolve: { page: ContactResolver }
  },
  {
    path: '**',
    redirectTo: '/404'
  },
  {
    path: '404',
    component: NotFoundComponent
  }
];
