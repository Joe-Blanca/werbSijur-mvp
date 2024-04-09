import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { ServicosContratados } from 'src/app/models/servicosContratados.model';

@Injectable({
  providedIn: 'root'
})
export class ServicosContratadosService {

  constructor(private apiService: ApiService) { }

  private classController: string = 'processoServicosContratados';

  getAll(id: number): Observable<ServicosContratados[]> {
    return this.apiService.get(environment.api + this.classController + '/?id=' + id);
  }

  getId(id: number): Observable<ServicosContratados> {
    return this.apiService.get(environment.api + this.classController + '/' + id);
  }

  post(servicosContratados: ServicosContratados): Observable<ServicosContratados> {
    return this.apiService.post(environment.api + this.classController, servicosContratados);
  }

  put(servicosContratados: ServicosContratados): Observable<ServicosContratados> {
    return this.apiService.put(environment.api + this.classController + '/' + servicosContratados.id, servicosContratados);
  }

}
