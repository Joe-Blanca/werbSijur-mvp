import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Processo } from 'src/app/models/processo/processo.model';

@Injectable({
  providedIn: 'root'
})
export class ProcessoService {

  constructor(private apiService: ApiService) { }

  private classController: string = 'listaProcessos';

  getAll(): Observable<Processo[]> {
    return this.apiService.get(environment.api + this.classController);
  }

  getId(id: number): Observable<Processo> {
    return this.apiService.get(environment.api + this.classController + '/' + id);
  }

  post(processo: Processo): Observable<Processo> {
    return this.apiService.post(environment.api + this.classController, processo);
  }

  put(processo: Processo): Observable<Processo> {
    return this.apiService.put(environment.api + this.classController + '/' + processo.id, processo);
  }

}
