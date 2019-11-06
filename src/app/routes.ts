import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'product/cards', redirectTo: 'cards', pathMatch: 'full' },
  { path: 'product/custom', redirectTo: 'custom', pathMatch: 'full' },
  { path: 'product/weddings', redirectTo: 'weddings', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
    pathMatch: 'full'
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule),
    pathMatch: 'full'
  },
  {
    path: 'weddings',
    loadChildren: () => import('./weddings/weddings.module').then(m => m.WeddingsModule)
  },
  {
    path: 'cards',
    loadChildren: () => import('./cards/cards.module').then(m => m.CardsModule)
  },
  {
    path: 'custom',
    loadChildren: () => import('./custom/custom.module').then(m => m.CustomModule)
  }
];
