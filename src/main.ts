import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode, provide} from '@angular/core';
import {CoworkingAppComponent, environment} from './app/';
import {APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from '@angular/common';
import {ROUTER_PROVIDERS} from "@angular/router";


if (environment.production) {
  enableProdMode();
}

/**
 * Se esta inyectando el ROUTER_PROVIDERS en esta seccion para configurar la
 * LocationStrategy a toda la aplicacion. Si no se inyecta al momento de hacer
 * el bootstraping si no en la configuracion del modulo principal de la aplicacion
 * esta configuracion no se hereda a los demas componentes. Y en este caso queremos
 * que eso suceda.
 */
bootstrap(CoworkingAppComponent, [
  ROUTER_PROVIDERS,
  provide(APP_BASE_HREF, {useValue: "/"}),
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]);

