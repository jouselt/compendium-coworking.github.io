import {Injectable} from '@angular/core';

import {Http, Response} from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import {Observable}     from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {ContactForm} from './contact-form.model';

@Injectable()
export class EmailService {

  constructor(private http:Http) {
  }

  sendEmail(data:ContactForm):Observable<any> {

    console.log(data);

    let body = JSON.stringify(data);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post('http://localhost:8888/email.php', body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res:Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleError(error:any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
