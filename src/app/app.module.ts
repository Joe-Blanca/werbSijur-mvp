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
import { TesteComponent } from './modules/processo/components/partes/partes.component';

registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent,
    ProcessoComponent,
    NavbarComponent,
    SidebarComponent,
    NovoProcessoComponent,
    ProcessDetalheComponent,
    TesteComponent
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
    NzTabsModule
    ],
  providers: [
    { provide: NZ_I18N, useValue: pt_BR }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
