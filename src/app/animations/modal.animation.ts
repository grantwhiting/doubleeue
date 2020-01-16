import {animate, style, transition, trigger} from '@angular/animations';
import {DEFAULT_TIMING} from './animation-constants';

export const modalFadeScaleAnimation = trigger('modalFadeScaleEnterLeave', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'scale3d(0, 0, 0)'
    }),
    animate(
      DEFAULT_TIMING,
      style({
        opacity: 1,
        transform: 'scale3d(1, 1, 1)'
      })
    )
  ]),
  transition(':leave', [
    animate(
      DEFAULT_TIMING,
      style({
        opacity: 0,
        transform: 'scale3d(0, 0, 0)'
      })
    )
  ])
]);

export const modalFadeAnimation = trigger('modalFadeEnterLeave', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate(
      DEFAULT_TIMING,
      style({ opacity: 1 })
    )
  ]),
  transition(':leave', [
    animate(
      DEFAULT_TIMING,
      style({ opacity: 0})
    )
  ])
])
