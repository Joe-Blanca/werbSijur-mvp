import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Pretensao } from 'src/app/models/pretensao.model';

@Injectable({
  providedIn: 'root'
})
export class PretensaoService {

  constructor(private apiService: ApiService) { }

  private classController: string = 'processoPretensao';

  getAll(id: number): Observable<Pretensao[]> {
    return this.apiService.get(environment.api + this.classController + '/?id=' + id);
  }

  getId(id: number): Observable<Pretensao> {
    return this.apiService.get(environment.api + this.classController + '/' + id);
  }

  post(pretensao: Pretensao): Observable<Pretensao> {
    return this.apiService.post(environment.api + this.classController, pretensao);
  }

  put(pretensao: Pretensao): Observable<Pretensao> {
    return this.apiService.put(environment.api + this.classController + '/' + pretensao.id, pretensao);
  }

}
