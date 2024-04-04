/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MotivoEncerramentoService } from './motivoEncerramento.service';

describe('Service: MotivoEncerramento', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MotivoEncerramentoService]
    });
  });

  it('should ...', inject([MotivoEncerramentoService], (service: MotivoEncerramentoService) => {
    expect(service).toBeTruthy();
  }));
});
