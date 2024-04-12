import { RequisicaoService } from './../../services/requisicoes.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl,  FormGroup,  FormBuilder,  Validators,} from '@angular/forms';
import { Requisicoes } from 'src/app/models/requisicao/requisicoes.model';

@Component({
  selector: 'app-novo-requisicao',
  templateUrl: './novo-requisicao.component.html',
})
export class NovoRequisicaoComponent {
  @Output() requisicaoCadastro : EventEmitter<void> = new EventEmitter<void>();

  isVisible = false;
  visibleId = false;
  visibleLabel = true;
  form!: FormGroup;
  dateFormat = 'dd/MM/yyyy';
  tipo: string = 'I';

  //listas
  //dataStatus: Status[] = [];

  constructor(
    private fb: FormBuilder,
    private RequisicaoService :RequisicaoService
  ) {
    this.form = this.fb.group({
      id: [null],
      dsc_requisicao: [null],
      estrutura: [null],
      dat_prazo:[null],
      obs_requisicao:[null],
      tp_requisicao:[null],
      requisitante:[null],
      atendente:[null],
      status_requisicao:[null]
    })
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  salvarRequisicao(){
    let dados = this.form.value as Requisicoes;

    if(this.form.valid){
      if(this.tipo == 'I'){
        this.inserirRequisicao(dados);
      }else if(this.tipo =='U'){
        this.atualizarRequisicao(dados);
      }
    }else{
      console.log('Cadastro Inválido')
    }
  }

  inserirRequisicao(requisicao: Requisicoes){
    this.RequisicaoService.post(requisicao).subscribe((retorno: any) => {
      console.log(retorno);
      this.requisicaoCadastro.emit();
      this.form.reset();
    })
  }

  inserirTimeline(){
    ///continuar daqui
  }

  atualizarRequisicao(requisicao: Requisicoes){
    this.RequisicaoService.put(requisicao).subscribe((retorno: any) =>{
      console.log(retorno);
      this.requisicaoCadastro.emit();
      this.setDataRequisicao(requisicao);
    })
  }

  setDataRequisicao(requisicaoData : Requisicoes){
    this.form.patchValue(requisicaoData);
  }
}
