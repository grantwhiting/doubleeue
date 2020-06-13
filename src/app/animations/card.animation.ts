import {animate, keyframes, query, stagger, style, transition, trigger} from '@angular/animations';

export const cardAnimation = trigger('cardAnimation', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0 })
    ], { optional: true }),
    query(':enter', stagger(80, [
      animate('0.3s ease-in', keyframes([
        style({ opacity: 0 }),
        style({ opacity: 0.5 }),
        style({ opacity: 1 })
      ]))
    ]), { optional: true })
  ])
]);
