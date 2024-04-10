import { ApiService } from './../../../../core/services/api.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Custas } from 'src/app/models/custas';

@Injectable({
  providedIn: 'root'
})
export class CustasService {

  constructor(private ApiService: ApiService) { }

  private classController: string = 'processoCustas';

  getAll(id: number): Observable<Custas[]> {
    return this.ApiService.get(environment.api + this.classController + '/?id=' + id);
  }

  getId(id: number): Observable<Custas> {
    return this.ApiService.get(environment.api + this.classController + '/' + id);
  }

  post(custa: Custas): Observable<Custas> {
    return this.ApiService.post(environment.api + this.classController, custa);
  }

  put(custa: Custas): Observable<Custas> {
    return this.ApiService.put(environment.api + this.classController + '/' + custa.id, custa);
  }

}
