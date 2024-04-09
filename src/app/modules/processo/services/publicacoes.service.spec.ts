/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PublicacoesService } from './publicacoes.service';

describe('Service: Publicacoes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PublicacoesService]
    });
  });

  it('should ...', inject([PublicacoesService], (service: PublicacoesService) => {
    expect(service).toBeTruthy();
  }));
});
