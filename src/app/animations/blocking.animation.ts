import { transition, trigger } from '@angular/animations';

export const blockingAnimation = trigger('blockInitialRender',
  [
    transition( ':enter', [] )
  ]
);
