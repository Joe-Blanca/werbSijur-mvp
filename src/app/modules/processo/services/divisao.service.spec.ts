/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DivisaoService } from './divisao.service';

describe('Service: Divisao', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DivisaoService]
    });
  });

  it('should ...', inject([DivisaoService], (service: DivisaoService) => {
    expect(service).toBeTruthy();
  }));
});
