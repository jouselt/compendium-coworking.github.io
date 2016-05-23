import {Component, OnInit} from '@angular/core';
import {WhoAreWeComponent} from './+who-are-we';
import {TestimoniesComponent} from './+testimonies';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {BenefitsComponent} from './+benefits';

@Component({
  moduleId: module.id,
  selector: 'app-about-us',
  templateUrl: 'about-us.component.html',
  styleUrls: ['about-us.component.css'],
  directives: [ROUTER_DIRECTIVES]
})

@Routes([
  {path: '/quienes-somos', component: WhoAreWeComponent},
  {path: '/testimonios', component: TestimoniesComponent},
  {path: '/beneficios', component: BenefitsComponent}
])

export class AboutUsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
