import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { PROFILES } from 'src/assets/profiles';
import { RECOMMENDED_PROFILES } from 'src/assets/recommended-profiles';

@Injectable()
export class DashboardService {
  getProfiles() {
    return of(PROFILES);
  }

  getRecommendedProfiles() {
    return of(RECOMMENDED_PROFILES);
  }
}
