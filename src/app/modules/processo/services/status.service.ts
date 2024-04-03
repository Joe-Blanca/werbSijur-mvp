import { Observable, retry } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Status } from 'src/app/models/status.model';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

constructor(private apiService: ApiService) { }

private classController: string = 'listastatus';

  listarTodosStatus(): Observable<Status>{
    return this.apiService.get(environment.api + this.classController)
  }

  cadastrarstatus(objeto : Status) : Observable <Status>{
    return this.apiService.post(environment.api + this.classController, objeto)
  }

}

