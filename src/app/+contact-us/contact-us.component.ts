import {Component, OnInit} from '@angular/core';

import 'gmaps';
declare var GMaps:any;
declare var google:any;

@Component({
  moduleId: module.id,
  selector: 'app-contact-us',
  templateUrl: 'contact-us.component.html',
  styleUrls: ['contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

    var map;

    map = new GMaps({
      el: '#gmap',
      lat: -0.1808688,
      lng: -78.4773278,
      scrollwheel: false,
      zoom: 16,
      zoomControl: false,
      panControl: false,
      streetViewControl: false,
      mapTypeControl: false,
      overviewMapControl: false,
      clickable: false,
      draggable: false
    });

    map.addMarker({
      lat: -0.1808688,
      lng: -78.4798278,
      animation: google.maps.Animation.DROP,
      verticalAlign: 'bottom',
      horizontalAlign: 'center',
      backgroundColor: '#3e8bff',
    });

  }

}
