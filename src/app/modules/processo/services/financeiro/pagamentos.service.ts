import { ApiService } from './../../../../core/services/api.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Pagamentos } from 'src/app/models/Pagamentos.model';

@Injectable({
  providedIn: 'root'
})
export class PagamentosService {

  constructor(private ApiService: ApiService) { }

  private classController: string = 'processoPagamentos';

  getAll(id: number): Observable<Pagamentos[]> {
    return this.ApiService.get(environment.api + this.classController + '/?id=' + id);
  }

  getId(id: number): Observable<Pagamentos> {
    return this.ApiService.get(environment.api + this.classController + '/' + id);
  }

  post(pagamento: Pagamentos): Observable<Pagamentos> {
    return this.ApiService.post(environment.api + this.classController, pagamento);
  }

  put(pagamento: Pagamentos): Observable<Pagamentos> {
    return this.ApiService.put(environment.api + this.classController + '/' + pagamento.id, pagamento);
  }

}
