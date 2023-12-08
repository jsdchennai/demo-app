import { Component, EventEmitter, Input, Output } from '@angular/core';

import { SwiperOptions } from 'swiper/types';
import { Swiper } from 'swiper/swiper';
import { DashboardService } from 'src/app/core/services';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile-swiper',
  templateUrl: './profile-swiper.component.html',
  styleUrls: ['./profile-swiper.component.scss'],
})
export class ProfileSwiperComponent {
  @Input() profiles: User[];

  @Input() config: SwiperOptions;

  @Output() submitted = new EventEmitter();

  onSubmit(profile: User) {
    this.submitted.emit(profile);
  }
}
