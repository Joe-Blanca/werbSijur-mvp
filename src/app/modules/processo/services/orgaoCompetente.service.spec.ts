/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OrgaoCompetenteService } from './orgaoCompetente.service';

describe('Service: OrgaoCompetente', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrgaoCompetenteService]
    });
  });

  it('should ...', inject([OrgaoCompetenteService], (service: OrgaoCompetenteService) => {
    expect(service).toBeTruthy();
  }));
});
