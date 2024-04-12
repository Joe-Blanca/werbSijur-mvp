import { DistribuicaoService } from './../../services/distribuicoes.service';
import { Router } from '@angular/router';
import { Component, ViewChild, OnInit } from '@angular/core';
import { Distribuicoes } from 'src/app/models/processo/distribuicoes.model';
import { NovoProcessoComponent } from '../../components/novo-processo/novo-processo.component';


@Component({
  selector: 'app-Distribuicao',
  templateUrl: './distribuicoes.component.html',
  styleUrls: ['./distribuicoes.component.scss'],
})
export class DistribuicaoComponent {

  @ViewChild(NovoProcessoComponent)
  novoProcessoComponent!: NovoProcessoComponent;

  id!: number;
  date = null;
  radioValue = 'A';
  checked = true;
  dateFormat = 'dd/MM/yyyy';
  isVisible = false;
  searchValue = '';
  visible = false;

  dataSource: Distribuicoes[] = [];

  constructor(
    private DistribuicaoService: DistribuicaoService,
    private Router: Router
  ) {}

  ngOnInit(): void {
    this.listarDistribuicoes();
  }

  listarDistribuicoes() {
    this.DistribuicaoService.getAll().subscribe((retorno) => {
      if (Array.isArray(retorno)) {
        this.dataSource = retorno;
      } else {
        this.dataSource = [retorno];
      }
    });
  }

  showModalFromParent() {
    this.novoProcessoComponent.showModal();
    this.novoProcessoComponent.visibleId = false;
    this.novoProcessoComponent.visibleLabel = true;
    this.novoProcessoComponent.tipo = 'I';
  }


  criarProcesso(id: any) {
    this.novoProcessoComponent.showModal();
     this.DistribuicaoService.getId(id).subscribe(
       (retorno: Distribuicoes) => {
         this.dataSource = [retorno];
         this.novoProcessoComponent.setDataProcesso(this.dataSource[0]);
       },
       (error) => {
         console.error(error);
       }
     );
  }
}
