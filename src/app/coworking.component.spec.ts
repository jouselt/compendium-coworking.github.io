import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { CoworkingAppComponent } from '../app/coworking.component';

beforeEachProviders(() => [CoworkingAppComponent]);

describe('App: Coworking', () => {
  it('should create the app',
      inject([CoworkingAppComponent], (app: CoworkingAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'coworking works!\'',
      inject([CoworkingAppComponent], (app: CoworkingAppComponent) => {
    expect(app.title).toEqual('coworking works!');
  }));
});
