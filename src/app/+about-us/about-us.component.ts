import {Component, OnInit} from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-about-us',
  templateUrl: 'about-us.component.html',
  styleUrls: ['about-us.component.css'],
  directives: [ROUTER_DIRECTIVES]
})

export class AboutUsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
