import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { services } from './services';
import { interceptors } from './interceptors';

@NgModule({
  imports: [HttpClientModule],
  providers: [...services, ...interceptors],
})
export class CoreModule {}
