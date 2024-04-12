import { PartesService } from '../../services/partes.service';
import { Component } from '@angular/core';
import { Partes } from 'src/app/models/processo/partes.model';
import { ActivatedRoute, Route } from '@angular/router';


@Component({
  selector: 'app-partes',
  templateUrl: './partes.component.html',
  styleUrls: ['./partes.component.scss']
})
export class PartesComponent {

  dataPartes: Partes[] = [];
  id!: number;

  constructor(
    private PartesService: PartesService,
    private Route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.Route.params.subscribe((o: any) => {
      this.id = o.id;
    });

    this.listarPartes();
  }

  listarPartes() {
     this.PartesService.getAll(this.id).subscribe((retorno) => {
       if (Array.isArray(retorno)) {
         this.dataPartes= retorno;
       } else {
         this.dataPartes = [retorno];
       }
     });
  }
}
