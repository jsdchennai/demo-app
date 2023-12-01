import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnInit,
} from '@angular/core';
import { Subject } from 'rxjs';

import { PROFILES } from 'src/assets/profiles';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
import { Swiper } from 'swiper/swiper';
import { RECOMMENDED_PROFILES } from 'src/assets/recommended-profiles';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  loggedInUser: any;

  profiles = PROFILES;

  recommendedProfiles = RECOMMENDED_PROFILES;

  swiper?: Swiper;

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      320: {
        slidesPerView: 1.5,
      },
      768: {
        slidesPerView: 2.5,
      },
      1280: {
        slidesPerView: 3.5,
      },
    },
    navigation: true,
  };

  @ViewChild('swiperRef') swiperRef: ElementRef | undefined;

  parentSubject: Subject<string> = new Subject();

  constructor() {}

  cardAnimation(value: any) {
    this.parentSubject.next(value);
  }

  ngOnInit(): void {
    this.loggedInUser = JSON.parse(localStorage.getItem('user'));
  }

  ngAfterViewInit() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }
}
