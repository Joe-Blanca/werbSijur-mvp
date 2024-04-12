import { ApiService } from './../../../core/services/api.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Distribuicoes } from 'src/app/models/processo/distribuicoes.model';

@Injectable({
  providedIn: 'root'
})
export class DistribuicaoService {

  constructor(private ApiService: ApiService) { }

  private classController: string = 'listaDistribuicoes';

  getAll(): Observable<Distribuicoes[]> {
    return this.ApiService.get(environment.api + this.classController);
  }

  getId(id: number): Observable<Distribuicoes> {
    return this.ApiService.get(environment.api + this.classController + '/' + id);
  }

  post(distribuicao: Distribuicoes): Observable<Distribuicoes> {
    return this.ApiService.post(environment.api + this.classController, distribuicao);
  }

  put(distribuicao: Distribuicoes): Observable<Distribuicoes> {
    return this.ApiService.put(environment.api + this.classController + '/' + distribuicao.id, distribuicao);
  }

}
