import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-who-are-we',
  templateUrl: 'who-are-we.component.html',
  styleUrls: ['who-are-we.component.css'],
  directives: [ROUTER_DIRECTIVES],
  host: {'class' : 'ng-animate page1Container'}
})
export class WhoAreWeComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
