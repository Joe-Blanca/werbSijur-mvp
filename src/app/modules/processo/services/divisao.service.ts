import { Observable, retry } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Divisao } from 'src/app/models/divisao.model';

@Injectable({
  providedIn: 'root'
})
export class DivisaoService {

constructor(private apiService: ApiService) { }

private classController: string = 'listaDivisao';

  listarTodasdivisaos(): Observable<Divisao>{
    return this.apiService.get(environment.api + this.classController)
  }

  cadastrardivisao(objeto : Divisao) : Observable <Divisao>{
    return this.apiService.post(environment.api + this.classController, objeto)
  }

}
