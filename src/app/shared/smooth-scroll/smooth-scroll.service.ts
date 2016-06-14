import {Injectable} from '@angular/core';
import 'jQuery';

// This declarations are to make use of the libraries.
declare var jQuery:any;

@Injectable()
export class SmoothScrollService {

  constructor() {
  }

  scrollTo(selector) {
    jQuery('html, body').animate({scrollTop: jQuery(selector).offset().top }, 1500);
  }

}
