"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var _contact_us_1 = require('./+contact-us');
var router_1 = require('@angular/router');
var _home_1 = require('./+home');
var header_1 = require('./header');
var CoworkingAppComponent = (function () {
    function CoworkingAppComponent(router) {
        this.router = router;
        this.title = 'coworking works!';
    }
    CoworkingAppComponent.prototype.ngOnInit = function () {
        this.router.navigate(['/home']);
    };
    CoworkingAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'coworking-app',
            templateUrl: 'coworking.component.html',
            styleUrls: ['coworking.component.css'],
            directives: [header_1.HeaderComponent, router_1.ROUTER_DIRECTIVES],
            providers: [router_1.ROUTER_PROVIDERS]
        }),
        router_1.Routes([
            { path: '/contact-us', component: _contact_us_1.ContactUsComponent },
            { path: '/home', component: _home_1.HomeComponent }
        ])
    ], CoworkingAppComponent);
    return CoworkingAppComponent;
}());
exports.CoworkingAppComponent = CoworkingAppComponent;
//# sourceMappingURL=coworking.component.js.map