import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { containers } from './containers';
import { SharedModule } from '../shared/shared.module';
import { ProfileDetailsContainerComponent } from './containers/profile-details-container/profile-details-container.component';

@NgModule({
  declarations: [...containers, ProfileDetailsContainerComponent],
  imports: [SharedModule, DashboardRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule {}
