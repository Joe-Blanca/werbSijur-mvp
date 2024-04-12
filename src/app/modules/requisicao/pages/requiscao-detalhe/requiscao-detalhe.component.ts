import { RequisicaoService } from './../../services/requisicoes.service';
import { ActivatedRoute, Route } from '@angular/router';
import { Component, ViewChild, OnInit } from '@angular/core';
import { Requisicoes } from 'src/app/models/requisicao/requisicoes.model';
import { NovoRequisicaoComponent } from '../../components/novo-requisicao/novo-requisicao.component';

@Component({
  selector: 'app-requiscao-detalhe',
  templateUrl: './requiscao-detalhe.component.html',
  styleUrls: ['./requiscao-detalhe.component.scss']
})
export class RequiscaoDetalheComponent {
  @ViewChild(NovoRequisicaoComponent) modal!: NovoRequisicaoComponent;

  id!: number;
  descricao!: string;
  date = null;
  typeAdd: boolean = false;
  radioValue = 'A';
  checked = true;
  dateFormat = 'dd/MM/yyyy';
  isVisible = false;
  searchValue = '';
  visible = false;

  dataRequisicao: Requisicoes[] = [];

  constructor(
    private Route : ActivatedRoute,
    private RequisicaoService : RequisicaoService
  ){}

  ngOnInit(): void{
    this.Route.params.subscribe((o: any) =>{
      this.id = o.id
    })
  }

  ngAfterViewInit(): void {

  }

  showModalFromParent() {
    this.modal.showModal();
    this.modal.visibleId = true;
    this.modal.visibleLabel = false;
  }

  obtemDadosRequisicao(){
    this.RequisicaoService.getId(this.id).subscribe(

      (retorno: Requisicoes) => {
        this.dataRequisicao = [retorno];
        this.descricao = this.dataRequisicao[0].dsc_requisicao;
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  editarRequisicao(){
    this.modal.tipo = 'U';
    this.modal.showModal();
    this.RequisicaoService.getId(this.id).subscribe(
      (retorno: Requisicoes) => {
        this.dataRequisicao = [retorno];
        this.modal.setDataRequisicao(this.dataRequisicao[0]);
      },
      (error) =>{
        console.error(error);
      }
    )
  }
}
