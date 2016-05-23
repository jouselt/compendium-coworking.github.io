import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import 'jQuery';
import 'wowjs';

// This declarations are to make use of the libraries.
declare var jQuery:any;
declare var WOW:any;

@Component({
  moduleId: module.id,
  selector: 'app-home',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

    jQuery('.main-slider').addClass('animate-in');
    jQuery('.preloader').remove();
    //End Preloader

    new WOW().init();
  }

}
