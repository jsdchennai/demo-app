import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { containers } from './containers';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [...containers],
  imports: [SharedModule, DashboardRoutingModule],
})
export class DashboardModule {}
