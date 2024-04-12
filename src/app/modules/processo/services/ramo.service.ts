import { Observable, retry } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Ramo } from 'src/app/models/processo/ramo.model';

@Injectable({
  providedIn: 'root'
})
export class RamoService {

constructor(private apiService: ApiService) { }

private classController: string = 'listaramo';

  listarTodosRamos(): Observable<Ramo>{
    return this.apiService.get(environment.api + this.classController)
  }

  cadastrarRamo(objeto : Ramo) : Observable <Ramo>{
    return this.apiService.post(environment.api + this.classController, objeto)
  }

}
