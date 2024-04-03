/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MateriaDiscussaoService } from './materiaDiscussao.service';

describe('Service: MateriaDiscussao', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MateriaDiscussaoService]
    });
  });

  it('should ...', inject([MateriaDiscussaoService], (service: MateriaDiscussaoService) => {
    expect(service).toBeTruthy();
  }));
});
