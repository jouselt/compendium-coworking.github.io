import {Component, OnInit} from '@angular/core';
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap'

import 'jQuery';

declare var jQuery:any;

// import 'bootstrap';
@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  directives: [AlertComponent],
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

    jQuery('.main-slider').addClass('animate-in');
    jQuery('.preloader').remove();
    //End Preloader

    var jQueryportfolio_selectors = jQuery('.portfolio-filter >li>a');

    if (jQueryportfolio_selectors.length) {

      var jQueryportfolio = jQuery('.portfolio-items');
      jQueryportfolio.isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      jQueryportfolio_selectors.on('click', function () {
        jQueryportfolio_selectors.removeClass('active');
        jQuery(this).addClass('active');
        var selector = jQuery(this).attr('data-filter');
        jQueryportfolio.isotope({filter: selector});
        return false;
      });
    }

  }

}
