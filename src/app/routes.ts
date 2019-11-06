import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {WeddingsComponent} from './weddings/weddings.component';
import {CardsComponent} from './cards/cards.component';
import {CustomComponent} from './custom/custom.component';
import {HomeResolver} from './home/home.resolver';
import {AboutResolver} from './about/about.resolver';
import {ContactResolver} from './contact/contact.resolver';
import {WeddingsResolver} from './weddings/weddings.resolver';
import {CardsResolver} from './cards/cards.resolver';
import {CustomResolver} from './custom/custom.resolver';

export const routes: Routes = [
  { path: 'product/cards', redirectTo: 'cards', pathMatch: 'full' },
  { path: 'product/custom', redirectTo: 'custom', pathMatch: 'full' },
  { path: 'product/weddings', redirectTo: 'weddings', pathMatch: 'full' },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    resolve: { items: HomeResolver }
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
    path: 'weddings',
    component: WeddingsComponent,
    resolve: { page: WeddingsResolver }
  },
  {
    path: 'cards',
    component: CardsComponent,
    resolve: { items: CardsResolver }
  },
  {
    path: 'custom',
    component: CustomComponent,
    resolve: { items: CustomResolver }
  }
];
