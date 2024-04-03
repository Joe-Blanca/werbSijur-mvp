import { Observable, retry } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { TipoAcoes } from 'src/app/models/tipoAcoes.model';

@Injectable({
  providedIn: 'root'
})
export class tipoAcoesService {

constructor(private apiService: ApiService) { }

private classController: string = 'listaTipoAcoes';

  listarTodosTipoAcoess(): Observable<TipoAcoes>{
    return this.apiService.get(environment.api + this.classController)
  }

  cadastrarTipoAcoes(objeto : TipoAcoes) : Observable <TipoAcoes>{
    return this.apiService.post(environment.api + this.classController, objeto)
  }

}
