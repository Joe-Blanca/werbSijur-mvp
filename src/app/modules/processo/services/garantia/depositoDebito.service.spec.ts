/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DepositoDebitoService } from './depositoDebito.service';

describe('Service: DepositoDebito', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DepositoDebitoService]
    });
  });

  it('should ...', inject([DepositoDebitoService], (service: DepositoDebitoService) => {
    expect(service).toBeTruthy();
  }));
});
