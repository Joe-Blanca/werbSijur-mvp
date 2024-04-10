/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProgPagamentosService } from './progPagamentos.service';

describe('Service: ProgPagamentos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgPagamentosService]
    });
  });

  it('should ...', inject([ProgPagamentosService], (service: ProgPagamentosService) => {
    expect(service).toBeTruthy();
  }));
});
