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
import { processo } from 'src/app/models/processo.model';
import { Status } from 'src/app/models/status.model';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ProcessoComponent } from 'src/app/modules/processo/pages/processo.component';
import { TipoAcoes } from 'src/app/models/tipoAcoes.model';

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
  modalVisible = false;
  listStatus: any;
  form!: FormGroup;

  dataStatus: Status[] = [];
  dataRamo: Ramo[] = [];
  dataTipoAcoes : TipoAcoes[] = [];
  dataMateriaDiscussao : MateriaDiscussao[] = [];

  @Output() processoCadastrado: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder,
    private processoService: ProcessoService,
    private StatusService: StatusService,
    private RamoService: RamoService,
    private tipoAcoesService: tipoAcoesService,
    private MateriaDiscussaoService: MateriaDiscussaoService
  ) {
    this.form = this.fb.group({
      numero_unico: [null, Validators.required],
      num_processo: [null, Validators.required],
      dat_inicio:[null, Validators.required],
      dat_distribuicao:[null, Validators.required],
      num_distribuicao:[null, Validators.required],
      num_auto_infracao:[null, Validators.required],
      numero_cda:[null, Validators.required],
      num_registro:[null, Validators.required],
      num_notificacao:[null, Validators.required],
      ind_autor_reu:[null],
      ind_recurso:[null],
      ind_administrativo:[null],
      dsc_rito:[null],
      status_processo: [null, Validators.required],
      ramo_processo: [null, Validators.required],
      tipo_acoes: [null, Validators.required],
      dsc_materia_processo: [null, Validators.required],
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
    if (this.form.valid) {
      let dados = this.form.value as processo;
      this.processoService
        .cadastrarProcesso(dados)
        .subscribe((retorno: any) => {
          console.log(retorno);
          this.processoCadastrado.emit();
          this.form.reset();
        });
    } else {
      this.form.markAllAsTouched();
      this.form.updateValueAndValidity();
    }
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
    this.tipoAcoesService.listarTodosTipoAcoess().subscribe((retornoTipoAcoes) => {
      if (Array.isArray(retornoTipoAcoes)) {
        this.dataTipoAcoes = retornoTipoAcoes;
      } else {
        this.dataTipoAcoes = [retornoTipoAcoes];
      }
    });
  }

  listarMateriaDiscussao() {
    this.MateriaDiscussaoService.listarTodaMateiras().subscribe((retornoMateriaDiscussao) => {
      if (Array.isArray(retornoMateriaDiscussao)) {
        this.dataMateriaDiscussao = retornoMateriaDiscussao;
      } else {
        this.dataMateriaDiscussao = [retornoMateriaDiscussao];
      }
    });
  }
}
