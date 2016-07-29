/**
 * Created by cristinapatino on 6/25/16.
 */

import {RouterConfig} from '@angular/router'
import {ContactUsComponent} from './contact-us.component';

import {ScrollTop} from './scrollTop';


export const ContactUsRoutes:RouterConfig = [
    {
        path: 'contactenos',
        component: ContactUsComponent,
        canActivate: [ScrollTop]
    }
];
