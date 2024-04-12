import { Observable, retry } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { MotivoEncerramento } from 'src/app/models/processo/motivoEncerramento.model';

@Injectable({
  providedIn: 'root'
})
export class MotivoEncerramentoService {

constructor(private apiService: ApiService) { }

private classController: string = 'listaMotivoEncerramento';

  listarTodasMotivoEncerramentos(): Observable<MotivoEncerramento>{
    return this.apiService.get(environment.api + this.classController)
  }

  cadastrarMotivoEncerramento(objeto : MotivoEncerramento) : Observable <MotivoEncerramento>{
    return this.apiService.post(environment.api + this.classController, objeto)
  }

}
