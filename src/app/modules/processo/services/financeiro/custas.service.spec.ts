/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CustasService } from './custas.service';

describe('Service: Custas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustasService]
    });
  });

  it('should ...', inject([CustasService], (service: CustasService) => {
    expect(service).toBeTruthy();
  }));
});
