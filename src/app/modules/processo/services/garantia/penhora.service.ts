import { ApiService } from './../../../../core/services/api.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Penhora } from 'src/app/models/processo/penhora.model';

@Injectable({
  providedIn: 'root'
})
export class PenhoraService {

  constructor(private ApiService: ApiService) { }

  private classController: string = 'processoPenhora';

  getAll(id: number): Observable<Penhora[]> {
    return this.ApiService.get(environment.api + this.classController + '/?id=' + id);
  }

  getId(id: number): Observable<Penhora> {
    return this.ApiService.get(environment.api + this.classController + '/' + id);
  }

  post(penhora: Penhora): Observable<Penhora> {
    return this.ApiService.post(environment.api + this.classController, penhora);
  }

  put(penhora: Penhora): Observable<Penhora> {
    return this.ApiService.put(environment.api + this.classController + '/' + penhora.id, penhora);
  }

}
