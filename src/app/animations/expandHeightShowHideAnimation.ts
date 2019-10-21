import { style, trigger, transition, animate, state } from '@angular/animations';
import { DEFAULT_TIMING } from './animation-constants';

export const expandHeightShowHideAnimation = trigger('expandHeightShowHide', [
  state('expanded', style({
    height: '*'
  })),
  state('collapsed', style({
    height: '{{ collapsedHeight }}'
  }), {
    params: {
      collapsedHeight: 0
    }
  }),
  transition('expanded <=> collapsed', [
    animate(DEFAULT_TIMING)
  ])
]);
