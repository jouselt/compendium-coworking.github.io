import {Component} from '@angular/core';

import {ContactForm} from './contact-form.model';
import {EmailService} from './email.service';

@Component({
  moduleId: module.id,
  selector: 'app-contact-form',
  templateUrl: 'contact-form.component.html',
  styleUrls: ['contact-form.component.css'],
  providers: [EmailService]
})
export class ContactFormComponent {
  contactFormData = new ContactForm();
  
  constructor(private EmailService:EmailService) {
  }

  sendEmail() {
    console.log(this.contactFormData);

    this.EmailService.sendEmail(this.contactFormData)
      .subscribe(
        response => {
          console.log(response)
        },
        error => {
          console.log(error);
        }
      );
  }
  
}
