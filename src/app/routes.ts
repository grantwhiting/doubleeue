import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'wordpress', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }
];