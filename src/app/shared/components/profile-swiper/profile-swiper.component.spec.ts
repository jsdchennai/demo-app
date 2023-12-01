import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSwiperComponent } from './profile-swiper.component';

describe('ProfileSwiperComponent', () => {
  let component: ProfileSwiperComponent;
  let fixture: ComponentFixture<ProfileSwiperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileSwiperComponent]
    });
    fixture = TestBed.createComponent(ProfileSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
