import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Requisicoes } from 'src/app/models/requisicao/requisicoes.model';

@Injectable({
  providedIn: 'root'
})
export class RequisicaoService {

  constructor(private apiService: ApiService) { }

  private classController: string = 'listaRequisicoes';

  getAll(): Observable<Requisicoes[]> {
    return this.apiService.get(environment.api + this.classController);
  }

  getId(id: number): Observable<Requisicoes> {
    return this.apiService.get(environment.api + this.classController + '/' + id);
  }

  post(requisicao: Requisicoes): Observable<Requisicoes> {
    return this.apiService.post(environment.api + this.classController, requisicao);
  }

  put(requisicao: Requisicoes): Observable<Requisicoes> {
    return this.apiService.put(environment.api + this.classController + '/' + requisicao.id, requisicao);
  }

}
