import { Component, OnInit } from '@angular/core';

import {ContactFormComponent} from '../shared/contact-form';

@Component({
  moduleId: module.id,
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css'],
  directives: [ContactFormComponent]
})
export class FooterComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
