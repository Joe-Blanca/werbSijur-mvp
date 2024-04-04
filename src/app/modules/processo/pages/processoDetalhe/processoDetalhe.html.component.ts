import { Component, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NovoProcessoComponent } from '../../components/novo-processo/novo-processo.component';


@Component({
  selector: 'app-process-detalhe',
  templateUrl: './processoDetalhe.html.component.html',
  styleUrls: ['./processoDetalhe.html.component.scss']
})
export class ProcessDetalheComponent {
  @ViewChild(NovoProcessoComponent)
  novoProcessoComponent!: NovoProcessoComponent;

  id!: string;

  constructor(private Route: ActivatedRoute) { }

  ngOnInit(): void {
      this.Route.params.subscribe((o: any) =>{
        this.id = o.id;
      })

      console.log('o id obtido é:' + this.id)
  }

  showModalFromParent(){
    this.novoProcessoComponent.showModal();
  }
}
