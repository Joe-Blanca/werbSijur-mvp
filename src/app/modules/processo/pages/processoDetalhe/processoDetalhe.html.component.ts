import { ProcessoService } from './../../services/processo.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NovoProcessoComponent } from '../../components/novo-processo/novo-processo.component';
import { Processo } from 'src/app/models/processo/processo.model';

@Component({
  selector: 'app-process-detalhe',
  templateUrl: './processoDetalhe.html.component.html',
  styleUrls: ['./processoDetalhe.html.component.scss'],
})
export class ProcessDetalheComponent {
  @ViewChild(NovoProcessoComponent)
  novoProcessoComponent!: NovoProcessoComponent;

  id!: number;
  nrProcesso!: string;

  dataProcesso: Processo[] = [];

  constructor(
    private Route: ActivatedRoute,
    private ProcessoService: ProcessoService
  ) {}

  ngOnInit(): void {
    this.Route.params.subscribe((o: any) => {
      this.id = o.id;
    });

    this.obtemDadosProcesso();
  }

  showModalFromParent() {
    this.novoProcessoComponent.showModal();
    this.novoProcessoComponent.visibleId = true;
    this.novoProcessoComponent.visibleLabel = false;
  }

  obtemDadosProcesso() {
     this.ProcessoService.getId(this.id).subscribe(
       (retorno: Processo) => {
          this.dataProcesso = [retorno];
          this.nrProcesso = this.dataProcesso[0].num_processo;
       },
       (error) => {
         console.error(error);
       }
     );
  }

  editarProcesso() {
      this.novoProcessoComponent.tipo = 'U';
      this.novoProcessoComponent.showModal();
      this.ProcessoService.getId(this.id).subscribe(
        (retorno: Processo) => {
          this.dataProcesso = [retorno];
          this.novoProcessoComponent.setDataProcesso(this.dataProcesso[0]);
        },
        (error) => {
          console.error(error);
        }
      );
  }



}
