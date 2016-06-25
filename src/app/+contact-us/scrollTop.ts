/**
 * Created by cristinapatino on 6/25/16.
 */
import {Injectable}     from '@angular/core';
import {CanActivate}    from '@angular/router';

import 'jQuery';

// This declarations are to make use of the libraries.
declare var jQuery:any;

@Injectable()
export class ScrollTop implements CanActivate {
    constructor() {
    }

    canActivate() {
        jQuery('body').scrollTop(0);
        return true;
    }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */