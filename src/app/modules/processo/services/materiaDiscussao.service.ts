import { MateriaDiscussao } from '../../../models/processo/materiaDiscussao.model';
import { Observable, retry } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class MateriaDiscussaoService {

constructor(private apiService: ApiService) { }

private classController: string = 'listaMateria';

  listarTodaMateiras(): Observable<MateriaDiscussao>{
    return this.apiService.get(environment.api + this.classController)
  }

  cadastrarMAteriaDiscussao(objeto : MateriaDiscussao) : Observable <MateriaDiscussao>{
    return this.apiService.post(environment.api + this.classController, objeto)
  }

}
