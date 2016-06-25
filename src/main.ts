import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {AppComponent, APP_ROUTER_PROVIDERS, environment} from './app';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

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
bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
])
    .catch(err => console.error(err));


