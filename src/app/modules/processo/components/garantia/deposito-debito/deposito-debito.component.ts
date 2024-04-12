import { DepositoDebitoService } from './../../../services/garantia/depositoDebito.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { DepositoDebito } from 'src/app/models/processo/depositoDebito.model';


@Component({
  selector: 'app-deposito-debito',
  templateUrl: './deposito-debito.component.html',
  styleUrls: ['./deposito-debito.component.scss']
})
export class DepositoDebitoComponent {

  dataDepositoDebito: DepositoDebito[] = [];
  id!: number;

  constructor(
    private DepositoDebitoService: DepositoDebitoService,
    private Route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.Route.params.subscribe((o: any) => {
      this.id = o.id;
    });

    this.listarDepositoDebito();
  }

  listarDepositoDebito() {
     this.DepositoDebitoService.getAll(this.id).subscribe((retorno) => {
       if (Array.isArray(retorno)) {
         this.dataDepositoDebito= retorno;
       } else {
         this.dataDepositoDebito = [retorno];
       }
     });
  }
}
