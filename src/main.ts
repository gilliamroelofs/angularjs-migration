import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import * as angular from 'angular';
import { setAngularJSGlobal, UpgradeModule } from '@angular/upgrade/static';

// LOAD ANGULARJS
import phonecatAppModule from './app/app.module.ng1';
import phonecatAppModuleConfig from './app/app.config.ng1';

phonecatAppModuleConfig(phonecatAppModule);

setAngularJSGlobal(angular);

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(platformRef => {
    console.log("Bootstrapping in Hybrid mode with Angular & AngularJS");
    const upgrade = platformRef.injector.get(UpgradeModule);

    upgrade.bootstrap(document.body, ['phonecatApp']);
  })
  .catch(err => console.error(err));;