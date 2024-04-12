import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Advogados } from 'src/app/models/processo/advogados.model';

@Injectable({
  providedIn: 'root'
})
export class AdvogadosService {

  constructor(private apiService: ApiService) { }

  private classController: string = 'processoAdvogados';

  getAll(id: number): Observable<Advogados[]> {
    return this.apiService.get(environment.api + this.classController + '/?id=' + id);
  }

  getId(id: number): Observable<Advogados> {
    return this.apiService.get(environment.api + this.classController + '/' + id);
  }

  post(advogados: Advogados): Observable<Advogados> {
    return this.apiService.post(environment.api + this.classController, advogados);
  }

  put(advogados: Advogados): Observable<Advogados> {
    return this.apiService.put(environment.api + this.classController + '/' + advogados.id, advogados);
  }

}
