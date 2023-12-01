import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { trigger, keyframes, animate, transition } from '@angular/animations';
import { Subject } from 'rxjs';

import * as kf from './keyframes';
import { RECOMMENDED_PROFILES } from 'src/assets/recommended-profiles';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('cardAnimator', [
      transition('* => swiperight', animate(750, keyframes(kf.swiperight))),
      transition('* => swipeleft', animate(750, keyframes(kf.swipeleft))),
    ]),
  ],
})
export class CardComponent implements OnInit, OnDestroy {
  profiles = RECOMMENDED_PROFILES;

  index = 0;

  @Input() parentSubject: Subject<any> = new Subject();

  @Output() submitted = new EventEmitter();

  animationState: string | undefined;

  constructor() {}

  ngOnInit() {
    this.parentSubject.subscribe((event) => {
      this.startAnimation(event);
    });
  }

  startAnimation(state: any) {
    console.log('state', state);
    if (!this.animationState) {
      this.animationState = state;
    }
  }

  resetAnimationState(state: any) {
    this.animationState = '';
  }

  onSubmit(value: string) {
    setTimeout(() => this.index++, 500);
    this.submitted.emit(value);
  }

  ngOnDestroy() {
    this.parentSubject.unsubscribe();
  }
}
