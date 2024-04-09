import { PublicacaoService } from '../../services/publicacoes.service';
import { Component } from '@angular/core';
import { Publicacao } from 'src/app/models/publicacao.model';
import { ActivatedRoute, Route } from '@angular/router';


@Component({
  selector: 'app-Publicacao',
  templateUrl: './publicacoes.component.html',
  styleUrls: ['./publicacoes.component.scss']
})
export class PublicacaoComponent {

  dataPublicacao: Publicacao[] = [];
  id!: number;

  constructor(
    private PublicacaoService: PublicacaoService,
    private Route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.Route.params.subscribe((o: any) => {
      this.id = o.id;
    });

    this.listarPublicacao();
  }

  listarPublicacao() {
     this.PublicacaoService.getAll(this.id).subscribe((retorno) => {
       if (Array.isArray(retorno)) {
         this.dataPublicacao= retorno;
       } else {
         this.dataPublicacao = [retorno];
       }
     });
  }
}
