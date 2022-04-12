import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import * as angular from 'angular';
import { setAngularJSGlobal } from '@angular/upgrade/static';

// LOAD ANGULARJS
import ng1App from './app/ng1/app.module.ng1';
import ng1AppConfig from './app/ng1/app.config.ng1';

ng1AppConfig(ng1App);

setAngularJSGlobal(angular);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
