import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { WhoAreWeComponent } from './who-are-we.component';

describe('Component: WhoAreWe', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [WhoAreWeComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([WhoAreWeComponent],
      (component: WhoAreWeComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(WhoAreWeComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(WhoAreWeComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-who-are-we></app-who-are-we>
  `,
  directives: [WhoAreWeComponent]
})
class WhoAreWeComponentTestController {
}

