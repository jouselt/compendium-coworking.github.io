import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode, provide} from '@angular/core';
import {CoworkingAppComponent, environment} from './app/';
import {APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from '@angular/common';
import {ROUTER_PROVIDERS} from "@angular/router";


if (environment.production) {
  enableProdMode();
}

bootstrap(CoworkingAppComponent, [
  ROUTER_PROVIDERS,
  provide(APP_BASE_HREF, {useValue: "/"}),
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]);

