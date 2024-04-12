import { RequisicaoService } from './../../services/requisicoes.service';
import { Router } from '@angular/router';
import { Component, ViewChild, OnInit } from '@angular/core';
import { Requisicoes } from 'src/app/models/requisicao/requisicoes.model';
import { NovoRequisicaoComponent } from '../../components/novo-requisicao/novo-requisicao.component';
import * as moment from 'moment';



@Component({
  selector: 'app-requisicao',
  templateUrl: './requisicoes.component.html',
  styleUrls: ['./requisicoes.component.scss'],
})
export class RequisicaoComponent {
  @ViewChild(NovoRequisicaoComponent)  modal!: NovoRequisicaoComponent;

  date = null;
  typeAdd: boolean = false;
  radioValue = 'A';
  checked = true;
  dateFormat = 'dd/MM/yyyy';
  isVisible = false;
  searchValue = '';
  visible = false;

  dataSource: Requisicoes[] = [];

  displayedColumns: string[] = [
    'codigo',
    'nrRequisicao',
    'status',
    'ramo',
    'tipo',
    'materia',
    'action',
  ];

  constructor(
    private RequisicaoService: RequisicaoService,
    private Router: Router
  ) {}

  ngOnInit(): void {
    this.listarRequisicoes();
  }

   ngAfterViewInit(): void {
     this.listenToRequisicaoCadastradoEvent();
  }

  abrirDetalhes(id: number | undefined) {
    this.Router.navigate(['/requisicaoDetalhe', id]);
  }

  private listenToRequisicaoCadastradoEvent(): void {
    if (this.modal) {
        this.modal.requisicaoCadastro.subscribe(() => {
          this.listarRequisicoes();
        });
    }
  }

  showModalFromParent() {
    this.modal.showModal();
    this.modal.visibleId = false;
    this.modal.visibleLabel = true;
  }

  listarRequisicoes() {
    this.RequisicaoService.getAll().subscribe((retorno) => {
      if (Array.isArray(retorno)) {
        this.dataSource = retorno;
      } else {
        this.dataSource = [retorno];
      }
    });
  }

  classData(dataPrazo: Date): string {
    const dataAtual = moment();
    const dataPrazoMoment = moment(dataPrazo, 'DD/MM/YYYY');

    if (dataPrazoMoment.isSame(dataAtual, 'day')) {
      return 'text-warning';
    } else if (dataPrazoMoment.isBefore(dataAtual, 'day')) {
      return 'text-danger';
    } else {
      return 'text-success';
    }
  }

  classDot(status: string): string {
    if (status === 'P') {
      return 'text-danger';
    } else if (status === 'A') {
      return 'text-info';
    } else if (status === 'F') {
      return 'text-success';
    } else {
      return 'text-secondary';
    }
  }

}
