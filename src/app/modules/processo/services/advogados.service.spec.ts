/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdvogadosService } from './advogados.service';

describe('Service: Advogados', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdvogadosService]
    });
  });

  it('should ...', inject([AdvogadosService], (service: AdvogadosService) => {
    expect(service).toBeTruthy();
  }));
});
