import { PagamentosService } from './../../../services/financeiro/pagamentos.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Pagamentos } from 'src/app/models/processo/pagamentos.model';


@Component({
  selector: 'app-pagamentos',
  templateUrl: './Pagamentos.component.html',
  styleUrls: ['./Pagamentos.component.scss']
})
export class PagamentosComponent {

  dataPagamentos: Pagamentos[] = [];
  id!: number;

  constructor(
    private PagamentosService: PagamentosService,
    private Route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.Route.params.subscribe((o: any) => {
      this.id = o.id;
    });

    this.listarPagamentos();
  }

  listarPagamentos() {
     this.PagamentosService.getAll(this.id).subscribe((retorno) => {
       if (Array.isArray(retorno)) {
         this.dataPagamentos= retorno;
       } else {
         this.dataPagamentos = [retorno];
       }
     });
  }
}
