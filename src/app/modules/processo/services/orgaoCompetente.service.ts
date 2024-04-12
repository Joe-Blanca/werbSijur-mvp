import { Observable, retry } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { OrgaoCompetente } from 'src/app/models/processo/orgaoCompentente.model';

@Injectable({
  providedIn: 'root'
})
export class OrgaoCompetenteService {

constructor(private apiService: ApiService) { }

private classController: string = 'listaorgaoCompetente';

  listarTodasOrgaoCompetentes(): Observable<OrgaoCompetente>{
    return this.apiService.get(environment.api + this.classController)
  }

  cadastrarorgaoCompetente(objeto : OrgaoCompetente) : Observable <OrgaoCompetente>{
    return this.apiService.post(environment.api + this.classController, objeto)
  }

}
