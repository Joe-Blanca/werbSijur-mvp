import { ProcessoService } from './../../services/processo.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NovoProcessoComponent } from '../../components/novo-processo/novo-processo.component';
import { Processo } from 'src/app/models/processo.model';

@Component({
  selector: 'app-process-detalhe',
  templateUrl: './processoDetalhe.html.component.html',
  styleUrls: ['./processoDetalhe.html.component.scss'],
})
export class ProcessDetalheComponent {
  @ViewChild(NovoProcessoComponent)
  novoProcessoComponent!: NovoProcessoComponent;

  id!: number;

  dataProcesso: Processo[] = [];

  constructor(
    private Route: ActivatedRoute,
    private ProcessoService: ProcessoService
  ) {}

  ngOnInit(): void {
    this.Route.params.subscribe((o: any) => {
      this.id = o.id;
    });

    console.log('o id obtido é:' + this.id);
  }

  showModalFromParent() {
    this.novoProcessoComponent.showModal();
    this.novoProcessoComponent.visibleId = true;
    this.novoProcessoComponent.visibleLabel = false;
  }

  editarProcesso(id: any) {
    this.novoProcessoComponent.showModal();
     this.ProcessoService.getId(this.id).subscribe(
       (retorno: Processo) => {
         this.dataProcesso = [retorno];
         console.log(this.dataProcesso);
         this.novoProcessoComponent.setDataProcesso(this.dataProcesso[0]);
       },
       (error) => {
         console.error(error);
       }
     );
  }

}
