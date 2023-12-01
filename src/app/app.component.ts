import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  parentSubject: Subject<string> = new Subject();

  constructor() {}

  submit(value: string) {
    console.log('v', value);
    if (value == 'Yes') {
      this.cardAnimation('swipeleft');
    } else {
      this.cardAnimation('swiperight');
    }
  }

  cardAnimation(value: any) {
    this.parentSubject.next(value);
  }
}
