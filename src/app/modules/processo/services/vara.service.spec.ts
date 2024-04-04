/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VaraService } from './vara.service';

describe('Service: Vara', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VaraService]
    });
  });

  it('should ...', inject([VaraService], (service: VaraService) => {
    expect(service).toBeTruthy();
  }));
});
