import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  trigger,
  keyframes,
  animate,
  transition,
  style,
} from '@angular/animations';

import { User } from 'src/app/models/user';

export const SwipeRight = [
  style({ opacity: 1 }),
  style({
    transform: 'translate3d(200%, 0, 0) rotate3d(0, 0, 1, 120deg)',
    opacity: 0,
  }),
];

export const SwipeLeft = [
  style({ opacity: 1 }),
  style({
    transform: 'translate3d(-200%, 0, 0) rotate3d(0, 0, 1, -120deg)',
    opacity: 0,
  }),
];

@Component({
  selector: 'app-recommended-profiles',
  templateUrl: './recommended-profiles.component.html',
  styleUrls: ['./recommended-profiles.component.scss'],
  animations: [
    trigger('cardAnimator', [
      transition('* => swiperight', animate(750, keyframes(SwipeRight))),
      transition('* => swipeleft', animate(750, keyframes(SwipeLeft))),
    ]),
  ],
})
export class RecommendedProfilesComponent {
  index: number = 0;

  animationState: string | undefined;

  @Input() profiles: User[] = [];

  @Output() submitted = new EventEmitter();

  startAnimation(state: string) {
    if (!this.animationState) {
      this.animationState = state;
    }
  }

  resetAnimationState() {
    this.animationState = '';
  }

  onSubmit(state: string) {
    setTimeout(() => this.index++, 500);
    this.startAnimation(state);
    this.submitted.emit(state);
  }
}
