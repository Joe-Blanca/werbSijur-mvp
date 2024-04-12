/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DistribuicoesService } from './distribuicoes.service';

describe('Service: Distribuicoes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DistribuicoesService]
    });
  });

  it('should ...', inject([DistribuicoesService], (service: DistribuicoesService) => {
    expect(service).toBeTruthy();
  }));
});
