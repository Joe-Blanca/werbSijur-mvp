import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Partes } from 'src/app/models/processo/partes.model';

@Injectable({
  providedIn: 'root'
})
export class PartesService {

  constructor(private apiService: ApiService) { }

  private classController: string = 'processoPartes';

  getAll(id: number): Observable<Partes[]> {
    return this.apiService.get(environment.api + this.classController + '/?id=' + id);
  }

  getId(id: number): Observable<Partes> {
    return this.apiService.get(environment.api + this.classController + '/' + id);
  }

  post(partes: Partes): Observable<Partes> {
    return this.apiService.post(environment.api + this.classController, partes);
  }

  put(partes: Partes): Observable<Partes> {
    return this.apiService.put(environment.api + this.classController + '/' + partes.id, partes);
  }

}
