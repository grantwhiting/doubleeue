import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'weddings', loadChildren: () => import('./weddings/weddings.module').then(m => m.WeddingsModule) },
  { path: 'cards', loadChildren: () => import('./cards/cards.module').then(m => m.CardsModule) },
  { path: 'custom', loadChildren: () => import('./custom/custom.module').then(m => m.CustomModule) }
];
