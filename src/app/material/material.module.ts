import { NgModule } from '@angular/core';
import { MatCardModule, MatSidenavModule } from '@angular/material';

const MATERIALMODULES = [
  MatCardModule,
  MatSidenavModule
];

@NgModule({
  exports: [MATERIALMODULES]
})
export class MaterialModule { }
