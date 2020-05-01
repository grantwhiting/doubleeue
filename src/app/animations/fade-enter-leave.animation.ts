import {animate, style, transition, trigger} from '@angular/animations';
import {DEFAULT_TIMING} from './animation-constants';

export const fadeEnterLeaveAnimation = trigger('fadeEnterLeave', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate(
      DEFAULT_TIMING,
      style({ opacity: 1 }))
  ]),
  transition(':leave', [
    animate(
      DEFAULT_TIMING,
      style({ opacity: 0 })
    )
  ])
]);
