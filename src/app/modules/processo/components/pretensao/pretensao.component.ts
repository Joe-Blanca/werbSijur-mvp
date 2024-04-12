import { PretensaoService } from '../../services/pretensao.service';
import { Component } from '@angular/core';
import { Pretensao } from 'src/app/models/processo/pretensao.model';
import { ActivatedRoute, Route } from '@angular/router';


@Component({
  selector: 'app-pretensao',
  templateUrl: './pretensao.component.html',
  styleUrls: ['./pretensao.component.scss']
})
export class PretensaoComponent {

  dataPretensao: Pretensao[] = [];
  id!: number;

  constructor(
    private PretensaoService: PretensaoService,
    private Route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.Route.params.subscribe((o: any) => {
      this.id = o.id;
    });

    this.listarPretensao();
  }

  listarPretensao() {
     this.PretensaoService.getAll(this.id).subscribe((retorno) => {
       if (Array.isArray(retorno)) {
         this.dataPretensao= retorno;
       } else {
         this.dataPretensao = [retorno];
       }
     });
  }
}
