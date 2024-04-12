import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Fases } from 'src/app/models/processo/fases.model';

@Injectable({
  providedIn: 'root'
})
export class FasesService {

  constructor(private apiService: ApiService) { }

  private classController: string = 'processoFase';

  getAll(id: number): Observable<Fases[]> {
    return this.apiService.get(environment.api + this.classController + '/?id=' + id);
  }

  getId(id: number): Observable<Fases> {
    return this.apiService.get(environment.api + this.classController + '/' + id);
  }

  post(fases: Fases): Observable<Fases> {
    return this.apiService.post(environment.api + this.classController, fases);
  }

  put(fases: Fases): Observable<Fases> {
    return this.apiService.put(environment.api + this.classController + '/' + fases.id, Fases);
  }

}
