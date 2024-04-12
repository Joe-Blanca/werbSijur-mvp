import { ApiService } from './../../../../core/services/api.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { DepositoDebito } from 'src/app/models/processo/depositoDebito.model';

@Injectable({
  providedIn: 'root'
})
export class DepositoDebitoService {

  constructor(private ApiService: ApiService) { }

  private classController: string = 'processoDepositoDebito';

  getAll(id: number): Observable<DepositoDebito[]> {
    return this.ApiService.get(environment.api + this.classController + '/?id=' + id);
  }

  getId(id: number): Observable<DepositoDebito> {
    return this.ApiService.get(environment.api + this.classController + '/' + id);
  }

  post(depositoDebito: DepositoDebito): Observable<DepositoDebito> {
    return this.ApiService.post(environment.api + this.classController, depositoDebito);
  }

  put(depositoDebito: DepositoDebito): Observable<DepositoDebito> {
    return this.ApiService.put(environment.api + this.classController + '/' + depositoDebito.id, depositoDebito);
  }

}
