import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomComponent} from './custom.component';
import {CustomResolver} from './custom.resolver';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ CustomComponent ],
  exports: [ CustomComponent ],
  providers: [ CustomResolver ]
})
export class CustomModule { }
