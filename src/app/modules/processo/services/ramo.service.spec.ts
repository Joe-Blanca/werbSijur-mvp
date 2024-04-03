/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RamoService } from './ramo.service';

describe('Service: Ramo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RamoService]
    });
  });

  it('should ...', inject([RamoService], (service: RamoService) => {
    expect(service).toBeTruthy();
  }));
});
