/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RequisicoesService } from './requisicoes.service';

describe('Service: Requisicoes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequisicoesService]
    });
  });

  it('should ...', inject([RequisicoesService], (service: RequisicoesService) => {
    expect(service).toBeTruthy();
  }));
});
