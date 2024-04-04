import { Router } from '@angular/router';
import { ProcessoService } from '../../services/processo.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { processo } from 'src/app/models/processo.model';
import { NovoProcessoComponent } from '../../components/novo-processo/novo-processo.component';

@Component({
  selector: 'app-processo',
  templateUrl: './processo.component.html',
  styleUrls: ['./processo.component.scss'],
})
export class ProcessoComponent {
  @ViewChild(NovoProcessoComponent)
  novoProcessoComponent!: NovoProcessoComponent;

  date = null;
  typeAdd: boolean = false;
  radioValue = 'A';
  checked = true;
  dateFormat = 'dd/MM/yyyy';
  isVisible = false;
  searchValue = '';
  visible = false;

  dataSource: processo[] = [];

  displayedColumns: string[] = [
    'codigo',
    'nrProcesso',
    'status',
    'ramo',
    'tipo',
    'materia',
    'action',
  ];

  constructor(
    private ProcessoService: ProcessoService,
    private Router: Router
  ) {}

  ngOnInit(): void {
    this.listarProcessos();
  }

  ngAfterViewInit(): void {
    this.listenToProcessoCadastradoEvent();
  }

  abrirDetalhes(id: number | undefined) {
    this.Router.navigate(['/processosDetalhe', id]);
  }

  private listenToProcessoCadastradoEvent(): void {
    if (this.novoProcessoComponent) {
      this.novoProcessoComponent.processoCadastrado.subscribe(() => {
        this.listarProcessos();
      });
    }
  }

  showModalFromParent() {
    this.novoProcessoComponent.showModal();
  }

  listarProcessos() {
    this.ProcessoService.listarTodosProcessos().subscribe((retorno) => {
      if (Array.isArray(retorno)) {
        this.dataSource = retorno;
      } else {
        this.dataSource = [retorno];
      }
    });
  }
}
