import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcessoComponent } from './modules/processo/pages/processo/processo.component';
import { ProcessDetalheComponent } from './modules/processo/pages/processoDetalhe/processoDetalhe.html.component';
import { DistribuicoesComponent } from './modules/processo/pages/distribuicoes/distribuicoes.component';

const routes: Routes = [
  {path: 'processos', component: ProcessoComponent},
  {path: 'distribuicoes', component: DistribuicoesComponent},
  {path: 'processosDetalhe/:id', component: ProcessDetalheComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
