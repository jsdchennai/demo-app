import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
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

  getProfileById(id: number) {
    let profile = PROFILES.find((a) => a.id == id);

    if (profile) {
      return of(profile);
    }

    return throwError(() => new Error('User not found!'));
  }
}
