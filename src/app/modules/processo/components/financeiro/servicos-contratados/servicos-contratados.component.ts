import { ServicosContratadosService } from '../../../services/servicos-contratados.service';
import { Component } from '@angular/core';
import { ServicosContratados } from 'src/app/models/servicosContratados.model';
import { ActivatedRoute, Route } from '@angular/router';


@Component({
  selector: 'app-servicos-contratados',
  templateUrl: './servicos-contratados.component.html',
  styleUrls: ['./servicos-contratados.component.scss']
})
export class ServicosContratadosComponent {

  dataServicosContratados: ServicosContratados[] = [];
  id!: number;

  constructor(
    private ServicosContratadosService: ServicosContratadosService,
    private Route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.Route.params.subscribe((o: any) => {
      this.id = o.id;
    });

    this.listarServicosContratados();
  }

  listarServicosContratados() {
     this.ServicosContratadosService.getAll(this.id).subscribe((retorno) => {
       if (Array.isArray(retorno)) {
         this.dataServicosContratados= retorno;
       } else {
         this.dataServicosContratados = [retorno];
       }
     });
  }
}
