import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { PROFILES } from 'src/assets/profiles';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
import { Swiper } from 'swiper/swiper';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements AfterViewInit {
  profiles = PROFILES;

  swiper?: Swiper;

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 25,
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
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    //   enabled: true,
    //   draggable: true,
    // },
  };

  @ViewChild('swiperRef') swiperRef: ElementRef | undefined;

  ngAfterViewInit() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }
}
