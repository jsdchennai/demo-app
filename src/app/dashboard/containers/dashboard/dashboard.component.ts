import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnInit,
} from '@angular/core';

import { SwiperOptions } from 'swiper/types';
import { Swiper } from 'swiper/swiper';
import { DashboardService } from 'src/app/core/services';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

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
      375: {
        slidesPerView: 1.5,
      },
      600: {
        slidesPerView: 2.5,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 2.5,
      },
      1200: {
        slidesPerView: 3.5,
      },
    },
    navigation: true,
  };

  @ViewChild('swiperRef') swiperRef: ElementRef | undefined;

  constructor(
    private dashboardService: DashboardService,
    private router: Router
  ) {}

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

  goToDetails(profile: User) {
    this.router.navigateByUrl(`/dashboard/${profile.id}`);
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
