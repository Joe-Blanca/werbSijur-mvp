/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PartesService } from './partes.service';

describe('Service: Partes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PartesService]
    });
  });

  it('should ...', inject([PartesService], (service: PartesService) => {
    expect(service).toBeTruthy();
  }));
});
