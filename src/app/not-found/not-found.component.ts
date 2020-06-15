import {Component} from '@angular/core';
import { baseHref } from '../services/global-variables';

@Component({
  selector: 'du-not-found',
  templateUrl: 'not-found.component.html',
  styleUrls: ['not-found.component.scss']
})
export class NotFoundComponent {
  baseHref = baseHref;
}
