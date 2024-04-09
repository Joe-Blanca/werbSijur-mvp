import { AdvogadosService } from '../../services/advogados.service';
import { Component } from '@angular/core';
import { Advogados } from 'src/app/models/advogados.model';
import { ActivatedRoute, Route } from '@angular/router';


@Component({
  selector: 'app-advogados',
  templateUrl: './advogados.component.html',
  styleUrls: ['./advogados.component.scss']
})
export class AdvogadosComponent {

  dataAdvogados: Advogados[] = [];
  id!: number;

  constructor(
    private AdvogadosService: AdvogadosService,
    private Route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.Route.params.subscribe((o: any) => {
      this.id = o.id;
    });

    this.listarAdvogados();
  }

  listarAdvogados() {
     this.AdvogadosService.getAll(this.id).subscribe((retorno) => {
       if (Array.isArray(retorno)) {
         this.dataAdvogados= retorno;
       } else {
         this.dataAdvogados = [retorno];
       }
     });
  }
}
