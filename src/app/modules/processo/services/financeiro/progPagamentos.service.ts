import { ApiService } from './../../../../core/services/api.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { ProgPagamentos } from 'src/app/models/processo/progPagamentos.model';

@Injectable({
  providedIn: 'root'
})
export class ProgPagamentosService {

  constructor(private ApiService: ApiService) { }

  private classController: string = 'processoProgPagamentos';

  getAll(id: number): Observable<ProgPagamentos[]> {
    return this.ApiService.get(environment.api + this.classController + '/?id=' + id);
  }

  getId(id: number): Observable<ProgPagamentos> {
    return this.ApiService.get(environment.api + this.classController + '/' + id);
  }

  post(progPagamento: ProgPagamentos): Observable<ProgPagamentos> {
    return this.ApiService.post(environment.api + this.classController, progPagamento);
  }

  put(progPagamento: ProgPagamentos): Observable<ProgPagamentos> {
    return this.ApiService.put(environment.api + this.classController + '/' + progPagamento.id, progPagamento);
  }

}
