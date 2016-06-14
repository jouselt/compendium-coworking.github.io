import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { SmoothScrollService } from './smooth-scroll.service';

describe('SmoothScroll Service', () => {
  beforeEachProviders(() => [SmoothScrollService]);

  it('should ...',
      inject([SmoothScrollService], (service: SmoothScrollService) => {
    expect(service).toBeTruthy();
  }));
});
