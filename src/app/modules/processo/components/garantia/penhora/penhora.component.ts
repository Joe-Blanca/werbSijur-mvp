import { PenhoraService } from './../../../services/garantia/penhora.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Penhora } from 'src/app/models/processo/penhora.model';


@Component({
  selector: 'app-penhora',
  templateUrl: './penhora.component.html',
  styleUrls: ['./penhora.component.scss']
})
export class PenhoraComponent {

  datapenhora: Penhora[] = [];
  id!: number;

  constructor(
    private PenhoraService: PenhoraService,
    private Route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.Route.params.subscribe((o: any) => {
      this.id = o.id;
    });

    this.listarpenhora();
  }

  listarpenhora() {
     this.PenhoraService.getAll(this.id).subscribe((retorno) => {
       if (Array.isArray(retorno)) {
         this.datapenhora= retorno;
       } else {
         this.datapenhora = [retorno];
       }
     });
  }
}
