/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PenhoraService } from './penhora.service';

describe('Service: Penhora', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PenhoraService]
    });
  });

  it('should ...', inject([PenhoraService], (service: PenhoraService) => {
    expect(service).toBeTruthy();
  }));
});
