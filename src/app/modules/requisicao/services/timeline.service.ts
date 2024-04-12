import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Timeline } from 'src/app/models/requisicao/timeline.model';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  constructor(private apiService: ApiService) { }

  private classController: string = 'listaTimeline';

  getAll(): Observable<Timeline[]> {
    return this.apiService.get(environment.api + this.classController);
  }

  getId(id: number): Observable<Timeline> {
    return this.apiService.get(environment.api + this.classController + '/' + id);
  }

  post(timeline: Timeline): Observable<Timeline> {
    return this.apiService.post(environment.api + this.classController, timeline);
  }

  put(timeline: Timeline): Observable<Timeline> {
    return this.apiService.put(environment.api + this.classController + '/' + timeline.id, timeline);
  }

}
