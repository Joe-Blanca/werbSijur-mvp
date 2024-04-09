/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServicosContratadosService } from './servicos-contratados.service';

describe('Service: ServicosContratados', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicosContratadosService]
    });
  });

  it('should ...', inject([ServicosContratadosService], (service: ServicosContratadosService) => {
    expect(service).toBeTruthy();
  }));
});
