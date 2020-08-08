import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';

const MATERIALMODULES = [
  MatCardModule,
  MatSidenavModule
];

@NgModule({
  exports: [MATERIALMODULES]
})
export class MaterialModule { }
