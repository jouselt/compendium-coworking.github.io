import {Component} from '@angular/core';
import {Router, Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import {HomeComponent} from './+home';
import {ContactUsComponent} from './+contact-us';
import {HeaderComponent} from './header';

@Component({
  moduleId: module.id,
  selector: 'coworking-app',
  templateUrl: 'coworking.component.html',
  directives: [ROUTER_DIRECTIVES, HeaderComponent],
  styleUrls: ['coworking.component.css'],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/home', component: HomeComponent},
  {path: '/contact-us', component: ContactUsComponent}
])

export class CoworkingAppComponent {
  title = 'coworking works!';

  constructor(private router:Router) {
  }

  ngOnInit() {
    this.router.navigate(['/home']);
  }
}
