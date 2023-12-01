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
import { DashboardService } from 'src/app/core/services';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  loggedInUser: any;

  profiles: User[] = [];

  recommendedProfiles: User[] = [];

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

  constructor(private dashboardService: DashboardService) {}

  cardAnimation(value: any) {
    this.parentSubject.next(value);
  }

  getProfiles() {
    this.dashboardService.getProfiles().subscribe({
      next: (res) => {
        this.profiles = res;
      },
      error: (err) => {},
    });
  }

  getRecommendedProfiles() {
    this.dashboardService.getRecommendedProfiles().subscribe({
      next: (res) => {
        this.recommendedProfiles = res;
      },
      error: (err) => {},
    });
  }

  ngOnInit(): void {
    this.loggedInUser = JSON.parse(localStorage.getItem('user'));

    this.getProfiles();
    this.getRecommendedProfiles();
  }

  ngAfterViewInit() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }
}
