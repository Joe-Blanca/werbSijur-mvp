import { DivisaoService } from './../../services/divisao.service';
import { MotivoEncerramentoService } from './../../services/motivoEncerramento.service';
import { MotivoEncerramento } from './../../../../models/motivoEncerramento.model';
import { OrgaoCompetenteService } from './../../services/orgaoCompetente.service';
import { Unidade } from './../../../../models/unidade.model';
import { UnidadeService } from './../../services/unidade.service';
import { VaraService } from './../../services/vara.service';
import { MateriaDiscussaoService } from './../../services/materiaDiscussao.service';
import { MateriaDiscussao } from './../../../../models/materiaDiscussao.model';
import { tipoAcoesService } from './../../services/tipoAcoes.service';
import { Ramo } from './../../../../models/ramo.model';
import { RamoService } from '../../services/ramo.service';
import { StatusService } from '../../services/status.service';
import { ProcessoService } from '../../services/processo.service';
import {
  Component,
  ViewChild,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { Processo } from 'src/app/models/processo.model';
import { Status } from 'src/app/models/status.model';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ProcessoComponent } from 'src/app/modules/processo/pages/processo/processo.component';
import { TipoAcoes } from 'src/app/models/tipoAcoes.model';
import { Vara } from 'src/app/models/vara.model';
import { OrgaoCompetente } from 'src/app/models/orgaoCompentente.model';
import { Divisao } from 'src/app/models/divisao.model';

@Component({
  selector: 'app-novo-processo',
  templateUrl: './novo-processo.component.html',
})
export class NovoProcessoComponent implements OnInit {
  date = null;
  typeAdd: boolean = false;
  radioValue = 'A';
  checked = true;
  dateFormat = 'dd/MM/yyyy';
  isVisible = false;
  visibleId : boolean = false;
  visibleLabel: boolean = true;
  modalVisible = false;
  listStatus: any;
  form!: FormGroup;

  dataStatus: Status[] = [];
  dataRamo: Ramo[] = [];
  dataTipoAcoes: TipoAcoes[] = [];
  dataMateriaDiscussao: MateriaDiscussao[] = [];
  dataVara: Vara[] = [];
  dataUnidade: Unidade[] = [];
  dataOrgaoCompetente: OrgaoCompetente[] = [];
  dataMotivoEncerramento: MotivoEncerramento[] = [];
  dataDivisao: Divisao[] = [];

  @Output() processoCadastrado: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder,
    private processoService: ProcessoService,
    private StatusService: StatusService,
    private RamoService: RamoService,
    private tipoAcoesService: tipoAcoesService,
    private MateriaDiscussaoService: MateriaDiscussaoService,
    private VaraService: VaraService,
    private UnidadeService: UnidadeService,
    private OrgaoCompetenteService: OrgaoCompetenteService,
    private MotivoEncerramentoService: MotivoEncerramentoService,
    private DivisaoService: DivisaoService
  ) {
    this.form = this.fb.group({
      numero_unico: [null, Validators.required],
      num_processo: [null, Validators.required],
      dat_inicio: [null, Validators.required],
      dat_distribuicao: [null, Validators.required],
      dat_notificacao: [null, Validators.required],
      num_distribuicao: [null, Validators.required],
      num_notificacao: [null, Validators.required],
      num_auto_infracao: [null, Validators.required],
      numero_cda: [null, Validators.required],
      num_registro: [null, Validators.required],
      ind_autor_reu: [null],
      ind_recurso: [null],
      ind_administrativo: [null],
      dsc_rito: [null],
      status_processo: [null, Validators.required],
      ramo_processo: [null, Validators.required],
      tipo_acoes: [null, Validators.required],
      dsc_materia_processo: [null, Validators.required],
      vara: [null, Validators.required],
      unidade: [null, Validators.required],
      orgaoCompetente: [null, Validators.required],
      motivoEncerramento: [null, Validators.required],
      divisao: [null, Validators.required],
      id: [null],
    });
  }

  onModalOpen() {
    this.modalVisible = true;
  }

  ngOnInit(): void {
    this.listarStatus();
    this.listarRamo();
    this.listarTipoAcoes();
    this.listarMateriaDiscussao();
    this.listarVara();
    this.listarUnidade();
    this.listarOrgaoCompetente();
    this.listarMotivoDesligamento();
    this.listarDivisao();
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

  salvarProcesso() {
    let dados = this.form.value as Processo;

    if (this.form.valid) {
      if (!dados.id) {
        this.inserirProcesso(dados);
      } else {
        this.atulizaProcesso(dados);
      }
    } else {
      this.form.markAllAsTouched();
      this.form.updateValueAndValidity();
    }
  }

  inserirProcesso(processo: Processo) {
    this.processoService.post(processo).subscribe((retorno: any) => {
      console.log(retorno);
      this.processoCadastrado.emit();
      this.form.reset();
    });
  }

  atulizaProcesso(processo: Processo) {
    this.processoService.put(processo).subscribe((retorno: any) => {
      console.log(retorno);
      this.processoCadastrado.emit();
      this.setDataProcesso(processo);
    });
  }

  onChangeDtProcesso(result: Date): void {
    console.log('onChange: ', result);
  }

  onChangeDtDristribuicao(result: Date): void {
    console.log('onChange: ', result);
  }

  listarStatus() {
    this.StatusService.listarTodosStatus().subscribe((retornoStatus) => {
      if (Array.isArray(retornoStatus)) {
        this.dataStatus = retornoStatus;
      } else {
        this.dataStatus = [retornoStatus];
      }
    });
  }

  listarRamo() {
    this.RamoService.listarTodosRamos().subscribe((retornoRamos) => {
      if (Array.isArray(retornoRamos)) {
        this.dataRamo = retornoRamos;
      } else {
        this.dataRamo = [retornoRamos];
      }
    });
  }

  listarTipoAcoes() {
    this.tipoAcoesService
      .listarTodosTipoAcoess()
      .subscribe((retornoTipoAcoes) => {
        if (Array.isArray(retornoTipoAcoes)) {
          this.dataTipoAcoes = retornoTipoAcoes;
        } else {
          this.dataTipoAcoes = [retornoTipoAcoes];
        }
      });
  }

  listarMateriaDiscussao() {
    this.MateriaDiscussaoService.listarTodaMateiras().subscribe(
      (retornoMateriaDiscussao) => {
        if (Array.isArray(retornoMateriaDiscussao)) {
          this.dataMateriaDiscussao = retornoMateriaDiscussao;
        } else {
          this.dataMateriaDiscussao = [retornoMateriaDiscussao];
        }
      }
    );
  }

  listarVara() {
    this.VaraService.listarTodasVaras().subscribe((retornoVara) => {
      if (Array.isArray(retornoVara)) {
        this.dataVara = retornoVara;
      } else {
        this.dataVara = [retornoVara];
      }
    });
  }

  listarUnidade() {
    this.UnidadeService.listarTodasUnidades().subscribe((retornoUnidade) => {
      if (Array.isArray(retornoUnidade)) {
        this.dataUnidade = retornoUnidade;
      } else {
        this.dataUnidade = [retornoUnidade];
      }
    });
  }

  listarOrgaoCompetente() {
    this.OrgaoCompetenteService.listarTodasOrgaoCompetentes().subscribe(
      (retornoOrgao) => {
        if (Array.isArray(retornoOrgao)) {
          this.dataOrgaoCompetente = retornoOrgao;
        } else {
          this.dataOrgaoCompetente = [retornoOrgao];
        }
      }
    );
  }

  listarMotivoDesligamento() {
    this.MotivoEncerramentoService.listarTodasMotivoEncerramentos().subscribe(
      (retornoMotivo) => {
        if (Array.isArray(retornoMotivo)) {
          this.dataMotivoEncerramento = retornoMotivo;
        } else {
          this.dataMotivoEncerramento = [retornoMotivo];
        }
      }
    );
  }

  listarDivisao() {
    this.DivisaoService.listarTodasdivisaos().subscribe((retornoDivisao) => {
      if (Array.isArray(retornoDivisao)) {
        this.dataDivisao = retornoDivisao;
      } else {
        this.dataDivisao = [retornoDivisao];
      }
    });
  }

  setDataProcesso(processoData: Processo) {
    this.form.patchValue(processoData);
  }
}
