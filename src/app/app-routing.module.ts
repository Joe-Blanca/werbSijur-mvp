import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcessoComponent } from './modules/processo/pages/processo/processo.component';
import { ProcessDetalheComponent } from './modules/processo/pages/processoDetalhe/processoDetalhe.html.component';
import { DistribuicaoComponent } from './modules/processo/pages/distribuicoes/distribuicoes.component';
import { RequisicaoComponent } from './modules/requisicao/pages/requisicoes/requisicoes.component';
import { RequiscaoDetalheComponent } from './modules/requisicao/pages/requiscao-detalhe/requiscao-detalhe.component';

const routes: Routes = [
  {path: 'processos', component: ProcessoComponent},
  {path: 'distribuicoes', component: DistribuicaoComponent},
  {path: 'processosDetalhe/:id', component: ProcessDetalheComponent},
  {path: 'requisicoes', component: RequisicaoComponent},
  {path: 'requisicaoDetalhe/:id', component: RequiscaoDetalheComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
