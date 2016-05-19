import {Component} from '@angular/core';
import {ContactUsComponent} from './+contact-us';
import {Router, Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import {HomeComponent} from './+home';

import {HeaderComponent} from './header';

@Component({
  moduleId: module.id,
  selector: 'coworking-app',
  templateUrl: 'coworking.component.html',
  styleUrls: ['coworking.component.css'],
  directives: [HeaderComponent, ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/contact-us', component: ContactUsComponent},
  {path: '/home', component: HomeComponent}
])
export class CoworkingAppComponent {
  title = 'coworking works!';

  constructor(private router:Router) {
  }

  ngOnInit() {
    this.router.navigate(['/home']);
  }
}
