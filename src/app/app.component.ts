import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';

//import {ContactUsComponent} from './+contact-us';
//import {HomeComponent} from './+home';
//import {AboutUsComponent} from './+about-us';
//import {ServicesComponent} from './+services';
//import {OurSpaceComponent} from './+our-space';

import {HeaderComponent} from './header';
import {FooterComponent} from './footer';

import 'bootstrap';

@Component({
    moduleId: module.id,
    selector: 'coworking-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [HeaderComponent, FooterComponent, ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS]
})

/*@Routes([
 {path: '', component: HomeComponent},
 {path: '/contactenos', component: ContactUsComponent},
 {path: '/sobre-nosotros', component: AboutUsComponent},
 {path: '/nuestros-servicios', component: ServicesComponent},
 {path: '/el-espacio', component: OurSpaceComponent}
 ])*/
export class AppComponent implements OnInit {

    title = 'coworking works!';

    constructor() {
    }


    ngOnInit() {
        // this.router.
        /*this.router.recognize(this.location.path()).then(response => {
         if (response === null) {
         this.router.navigate(['Home']);
         }
         });*/
    }


}
