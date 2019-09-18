import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material';

const MATERIALMODULES = [
  MatCardModule
];

@NgModule({
  imports: [MATERIALMODULES],
  exports: [MATERIALMODULES]
})
export class MaterialModule { }
