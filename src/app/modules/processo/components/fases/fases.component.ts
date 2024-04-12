import { FasesService } from '../../services/fases.service';
import { Component } from '@angular/core';
import { Fases } from 'src/app/models/processo/fases.model';
import { ActivatedRoute, Route } from '@angular/router';


@Component({
  selector: 'app-fases',
  templateUrl: './fases.component.html',
  styleUrls: ['./fases.component.scss']
})
export class FasesComponent {

  dataFases: Fases[] = [];
  id!: number;

  constructor(
    private FasesService: FasesService,
    private Route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.Route.params.subscribe((o: any) => {
      this.id = o.id;
    });

    this.listarFases();
  }

  listarFases() {
     this.FasesService.getAll(this.id).subscribe((retorno) => {
       if (Array.isArray(retorno)) {
         this.dataFases= retorno;
       } else {
         this.dataFases = [retorno];
       }
     });
  }
}
