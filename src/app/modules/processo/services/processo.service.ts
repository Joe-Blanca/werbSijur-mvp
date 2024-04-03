import { Observable, retry } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { processo } from 'src/app/models/processo.model';

@Injectable({
  providedIn: 'root'
})
export class ProcessoService {

constructor(private apiService: ApiService) { }

private classController: string = 'listaProcessos';

  listarTodosProcessos(): Observable<processo>{
    return this.apiService.get(environment.api + this.classController)
  }

  cadastrarProcesso(objeto : processo) : Observable <processo>{
    return this.apiService.post(environment.api + this.classController, objeto)
  }

}


