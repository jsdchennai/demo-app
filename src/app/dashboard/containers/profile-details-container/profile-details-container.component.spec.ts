import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDetailsContainerComponent } from './profile-details-container.component';

describe('ProfileDetailsContainerComponent', () => {
  let component: ProfileDetailsContainerComponent;
  let fixture: ComponentFixture<ProfileDetailsContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileDetailsContainerComponent]
    });
    fixture = TestBed.createComponent(ProfileDetailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
