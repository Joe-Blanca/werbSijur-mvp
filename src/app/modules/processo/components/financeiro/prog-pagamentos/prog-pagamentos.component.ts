import { ProgPagamentos } from './../../../../../models/progPagamentos.model';
import { ProgPagamentosService } from './../../../services/financeiro/progPagamentos.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';


@Component({
  selector: 'app-progPagamentos',
  templateUrl: './prog-pagamentos.component.html',
  styleUrls: ['./prog-pagamentos.component.scss']
})
export class progPagamentosComponent {

  dataprogPagamentos: ProgPagamentos[] = [];
  id!: number;

  constructor(
    private ProgPagamentosService: ProgPagamentosService,
    private Route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.Route.params.subscribe((o: any) => {
      this.id = o.id;
    });

    this.listarprogPagamentos();
  }

  listarprogPagamentos() {
     this.ProgPagamentosService.getAll(this.id).subscribe((retorno) => {
       if (Array.isArray(retorno)) {
         this.dataprogPagamentos= retorno;
       } else {
         this.dataprogPagamentos = [retorno];
       }
     });
  }
}
