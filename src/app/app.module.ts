import { PartesComponent } from './modules/processo/components/partes/partes.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProcessoComponent } from './modules/processo/pages/processo/processo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { pt_BR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from 'src/shared/navbar/navbar.component';
import { SidebarComponent } from 'src/shared/sidebar/sidebar.component';
import { MatTableModule } from '@angular/material/table';
import { NovoProcessoComponent } from './modules/processo/components/novo-processo/novo-processo.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { ProcessDetalheComponent } from './modules/processo/pages/processoDetalhe/processoDetalhe.html.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzInputModule } from 'ng-zorro-antd/input';
import { AdvogadosComponent } from './modules/processo/components/advogados/advogados.component';
import { PretensaoComponent } from './modules/processo/components/pretensao/pretensao.component';
import { FasesComponent } from './modules/processo/components/fases/fases.component';
import { PublicacaoComponent } from './modules/processo/components/publicacoes/publicacoes.component';
import { ServicosContratadosComponent } from './modules/processo/components/financeiro/servicos-contratados/servicos-contratados.component';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { FinanceiroComponent } from './modules/processo/components/financeiro/financeiro.component';
import { CustasComponent } from './modules/processo/components/financeiro/custas/custas.component';
import { progPagamentosComponent } from './modules/processo/components/financeiro/prog-pagamentos/prog-pagamentos.component';
import { GarantiaComponent } from './modules/processo/components/garantia/garantia.component';
import { PenhoraComponent } from './modules/processo/components/garantia/penhora/penhora.component';
import { DepositoDebitoComponent } from './modules/processo/components/garantia/deposito-debito/deposito-debito.component';
import { DepositoCreditoComponent } from './modules/processo/components/garantia/deposito-credito/deposito-credito.component';
import { PagamentosComponent } from './modules/processo/components/financeiro/pagamentos/pagamentos.component';
import { DistribuicaoComponent } from './modules/processo/pages/distribuicoes/distribuicoes.component';
import { NovoRequisicaoComponent } from './modules/requisicao/components/novo-requisicao/novo-requisicao.component';
import { RequisicaoComponent } from './modules/requisicao/pages/requisicoes/requisicoes.component';
import { RequiscaoDetalheComponent } from './modules/requisicao/pages/requiscao-detalhe/requiscao-detalhe.component';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { TimelineComponent } from './modules/requisicao/components/timeline/timeline.component';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';




registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent,
    ProcessoComponent,
    NavbarComponent,
    SidebarComponent,
    NovoProcessoComponent,
    ProcessDetalheComponent,
    PartesComponent,
    AdvogadosComponent,
    PretensaoComponent,
    FasesComponent,
    PublicacaoComponent,
    ServicosContratadosComponent,
    FinanceiroComponent,
    PagamentosComponent,
    CustasComponent,
    progPagamentosComponent,
    GarantiaComponent,
    PenhoraComponent,
    DepositoDebitoComponent,
    DepositoCreditoComponent,
    DistribuicaoComponent,
    RequisicaoComponent,
    NovoRequisicaoComponent,
    RequiscaoDetalheComponent,
    TimelineComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    NzModalModule,
    NzButtonModule,
    NzFormModule,
    NzDatePickerModule,
    NzSelectModule,
    NzRadioModule,
    NzCheckboxModule,
    ReactiveFormsModule,
    NzTableModule,
    NzDividerModule,
    NzDropDownModule,
    NzTabsModule,
    NzInputModule,
    NzToolTipModule,
    NzBadgeModule,
    NzTimelineModule,
    NzGridModule,
    NzLayoutModule
    ],
  providers: [
    { provide: NZ_I18N, useValue: pt_BR }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
