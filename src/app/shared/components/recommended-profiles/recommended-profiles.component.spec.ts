import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedProfilesComponent } from './recommended-profiles.component';

describe('RecommendedProfilesComponent', () => {
  let component: RecommendedProfilesComponent;
  let fixture: ComponentFixture<RecommendedProfilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecommendedProfilesComponent]
    });
    fixture = TestBed.createComponent(RecommendedProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
