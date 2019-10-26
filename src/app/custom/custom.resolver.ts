import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';

@Injectable()
export class CustomResolver implements Resolve<any> {
  resolve() {
    // do something
  }
}
