import { NgModule } from '@angular/core';

import { components } from './components';
import { containers } from './containers';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [...components, ...containers],
  imports: [AuthRoutingModule, SharedModule],
})
export class AuthModule {}
