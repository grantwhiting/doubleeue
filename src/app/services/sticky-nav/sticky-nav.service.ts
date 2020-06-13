import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StickyNavService {
  // tslint:disable-next-line:variable-name
  private _isNavSticky = new BehaviorSubject<boolean>(false);

  get isNavSticky(): BehaviorSubject<boolean> {
    return this._isNavSticky;
  }

   setIsNavSticky(sticky: boolean) {
    this._isNavSticky.next(sticky);
  }
}
