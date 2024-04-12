import { CustasService } from './../../../services/financeiro/custas.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Custas } from 'src/app/models/processo/custas.model';


@Component({
  selector: 'app-custas',
  templateUrl: './custas.component.html',
  styleUrls: ['./custas.component.scss']
})
export class CustasComponent {

  dataCustas: Custas[] = [];
  id!: number;

  constructor(
    private CustasService: CustasService,
    private Route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.Route.params.subscribe((o: any) => {
      this.id = o.id;
    });

    this.listarCustas();
  }

  listarCustas() {
     this.CustasService.getAll(this.id).subscribe((retorno) => {
       if (Array.isArray(retorno)) {
         this.dataCustas= retorno;
       } else {
         this.dataCustas = [retorno];
       }
     });
  }
}
