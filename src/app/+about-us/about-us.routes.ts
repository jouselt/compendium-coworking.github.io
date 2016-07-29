/**
 * Created by cristinapatino on 6/25/16.
 */

import {RouterConfig} from '@angular/router'
import {AboutUsComponent} from './about-us.component';
import {BenefitsComponent} from './+benefits';
import {WhoAreWeComponent} from './+who-are-we';
import {TestimoniesComponent} from './+testimonies';

export const AboutUsRoutes:RouterConfig = [
    {
        path: 'sobre-nosotros',
        component: AboutUsComponent,
        children: [
            {path: 'quienes-somos', component: WhoAreWeComponent},
            {path: 'testimonios', component: TestimoniesComponent},
            {path: 'beneficios', component: BenefitsComponent}
        ]
    }

];
