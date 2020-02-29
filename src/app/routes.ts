import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {WeddingsComponent} from './weddings/weddings.component';
import {CardsComponent} from './cards/cards.component';
import {HomeResolver} from './home/home.resolver';
import {AboutResolver} from './about/about.resolver';
import {ContactResolver} from './contact/contact.resolver';
import {WeddingsResolver} from './weddings/weddings.resolver';
import {CardsResolver} from './cards/cards.resolver';
import {CommissionsComponent} from './commissions/commissions.component';
import {CommissionsResolver} from './commissions/commissions.resolver';

export const routes: Routes = [
  { path: 'product/cards', redirectTo: 'cards', pathMatch: 'full' },
  { path: 'product/custom', redirectTo: 'custom', pathMatch: 'full' },
  { path: 'product/weddings', redirectTo: 'weddings', pathMatch: 'full' },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    resolve: { pod: HomeResolver }
  },
  {
    path: 'weddings',
    component: WeddingsComponent,
    resolve: { data: WeddingsResolver }
  },
  {
    path: 'cards',
    component: CardsComponent,
    resolve: { pod: CardsResolver }
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
  }
];
