import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-testimonies',
  templateUrl: 'testimonies.component.html',
  styleUrls: ['testimonies.component.css'],
  host: {'class' : 'ng-animate page2Container'}
})
export class TestimoniesComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
