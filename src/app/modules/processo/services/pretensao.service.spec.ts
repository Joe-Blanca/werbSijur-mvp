/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PretensaoService } from './pretensao.service';

describe('Service: Pretensao', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PretensaoService]
    });
  });

  it('should ...', inject([PretensaoService], (service: PretensaoService) => {
    expect(service).toBeTruthy();
  }));
});
