/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FasesService } from './fases.service';

describe('Service: Fases', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FasesService]
    });
  });

  it('should ...', inject([FasesService], (service: FasesService) => {
    expect(service).toBeTruthy();
  }));
});
