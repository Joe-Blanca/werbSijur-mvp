/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TipoAcoesService } from './tipoAcoes.service';

describe('Service: TipoAcoes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoAcoesService]
    });
  });

  it('should ...', inject([TipoAcoesService], (service: TipoAcoesService) => {
    expect(service).toBeTruthy();
  }));
});
