import { trigger, transition, animate, style, group } from '@angular/animations';

export const modalGalleryAnimation = trigger('slide', [
  transition(':enter', [
    style({ transform: 'translateX({{ start }}%)', opacity: 0 }),
    group([
      animate('500ms ease-in-out', style({ transform: 'translateX(0%)' })),
      animate('300ms ease-in-out', style({ opacity: 1 }))
    ])
  ], { params: { start: '100' } }),
  transition(':leave', [
    group([
      animate('500ms ease-in-out', style({ transform: 'translateX({{ leave }}%)' })),
      animate('300ms ease-in-out', style({ opacity: 0 }))
    ])
  ], { params: { leave: '-100' } })
]);
