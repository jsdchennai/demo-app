import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { services } from './services';
import { interceptors } from './interceptors';
import { guards } from './guards';

@NgModule({
  imports: [HttpClientModule],
  providers: [...services, ...guards, ...interceptors],
})
export class CoreModule {}
