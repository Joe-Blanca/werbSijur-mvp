import { Observable, retry } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Vara } from 'src/app/models/vara.model';

@Injectable({
  providedIn: 'root'
})
export class VaraService {

constructor(private apiService: ApiService) { }

private classController: string = 'listaVara';

  listarTodasVaras(): Observable<Vara>{
    return this.apiService.get(environment.api + this.classController)
  }

  cadastrarVara(objeto : Vara) : Observable <Vara>{
    return this.apiService.post(environment.api + this.classController, objeto)
  }

}
