import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-profile-card',
  templateUrl: './user-profile-card.component.html',
  styleUrls: ['./user-profile-card.component.scss'],
})
export class UserProfileCardComponent {
  @Input() loggedInUser: any;
}
