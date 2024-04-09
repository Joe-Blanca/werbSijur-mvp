import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Publicacao } from 'src/app/models/publicacao.model';

@Injectable({
  providedIn: 'root'
})
export class PublicacaoService {

  constructor(private apiService: ApiService) { }

  private classController: string = 'processoPublicacao';

  getAll(id: number): Observable<Publicacao[]> {
    return this.apiService.get(environment.api + this.classController + '/?id=' + id);
  }

  getId(id: number): Observable<Publicacao> {
    return this.apiService.get(environment.api + this.classController + '/' + id);
  }

  post(publicacao: Publicacao): Observable<Publicacao> {
    return this.apiService.post(environment.api + this.classController, publicacao);
  }

  put(publicacao: Publicacao): Observable<Publicacao> {
    return this.apiService.put(environment.api + this.classController + '/' + publicacao.id, publicacao);
  }

}
