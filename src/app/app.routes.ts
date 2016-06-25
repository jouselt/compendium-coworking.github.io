/**
 * Created by cristinapatino on 6/25/16.
 */

import {provideRouter, RouterConfig} from '@angular/router'
import {HomeRoutes} from './+home';
import {ContactUsRoutes, ScrollTop} from './+contact-us';
import {AboutUsRoutes} from './+about-us';
import {ServicesRoutes} from './+services';
import {OurSpaceRoutes} from './+our-space';

export const routes:RouterConfig = [
    ...HomeRoutes,
    ...ContactUsRoutes,
    ...AboutUsRoutes,
    ...ServicesRoutes,
    ...OurSpaceRoutes,
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes),
    ScrollTop
];
