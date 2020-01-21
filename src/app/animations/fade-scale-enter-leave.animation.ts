import {animate, style, transition, trigger} from '@angular/animations';
import {DEFAULT_TIMING} from './animation-constants';

export const fadeScaleEnterLeaveAnimation = trigger('fadeScaleEnterLeave', [
  transition(':enter', [
    style({
      height: 0,
      opacity: 0,
      transform: 'scale3d(0, 0, 0)'
    }),
    animate(
      DEFAULT_TIMING,
      style({
        height: '*',
        opacity: 1,
        transform: 'scale3d(1, 1, 1)'
      })
    )
  ]),
  transition(':leave', [
    animate(
      DEFAULT_TIMING,
      style({
        height: 0,
        opacity: 0,
        transform: 'scale3d(0, 0, 0)'
      })
    )
  ])
]);
