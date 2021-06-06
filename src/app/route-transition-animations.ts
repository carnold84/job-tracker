import {
  trigger,
  transition,
  style,
  query,
  animateChild,
  group,
  animate,
} from '@angular/animations';

export const routeTransitionAnimations = trigger('triggerName', [
  transition('JobsList => JobCreate, JobCreate => Job, JobsList => Job', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ right: '-100%' })]),
    query(':leave', animateChild()),
    group([
      query(':enter', [animate('500ms ease-in', style({ right: '0%' }))]),
    ]),
    query(':enter', animateChild()),
  ]),
  transition('Job => JobCreate, JobCreate => JobsList, Job => JobsList', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('500ms ease-in', style({ left: '100%' }))]),
    ]),
    query(':enter', animateChild()),
  ]),
]);
