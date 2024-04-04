import { Observable, retry } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Unidade } from 'src/app/models/unidade.model';

@Injectable({
  providedIn: 'root'
})
export class UnidadeService {

constructor(private apiService: ApiService) { }

private classController: string = 'listaUnidade';

  listarTodasUnidades(): Observable<Unidade>{
    return this.apiService.get(environment.api + this.classController)
  }

  cadastrarUnidade(objeto : Unidade) : Observable <Unidade>{
    return this.apiService.post(environment.api + this.classController, objeto)
  }

}
