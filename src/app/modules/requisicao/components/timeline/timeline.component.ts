import { Component, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html'
})
export class TimelineComponent {
  @ViewChild('create') createTemplate!: TemplateRef<any>;
  @ViewChild('accept') acceptTemplate!: TemplateRef<any>;
  @ViewChild('comment') commentTemplate!: TemplateRef<any>;
  @ViewChild('alertY') alertYTemplate!: TemplateRef<any>;
  @ViewChild('alertR') alertRTemplate!: TemplateRef<any>;
  @ViewChild('execute') executeTemplate!: TemplateRef<any>;

  dataTimeLine: any[] = [
    {
      header: 'Finalizada por: ',
      user: 'Luana',
      dt_inc: '2024-04-17',
      mensage: 'A Requisição foi finalizada com sucesso.',
      status: 'execute'
    },
    {
      header: 'Prazo Vencido',
      user: '',
      dt_inc: '2024-04-16',
      mensage: 'A Requisição venceu!',
      status: 'alertR'
    },
    {
      header: 'Prazo Vencendo',
      user: '',
      dt_inc: '2024-04-15',
      mensage: 'A Requisição vence hoje!',
      status: 'alertY'
    },
    {
      header: 'Comentário de: ',
      user: 'Ana',
      dt_inc: '2024-04-14',
      mensage: 'Comentário adicionado ao item',
      status: 'comment'
    },
    {
      header: 'Aceito por: ',
      user: 'Luana',
      dt_inc: '2024-04-13',
      mensage: 'Pedido aceito',
      status: 'accept'
    },
    {
      header: 'Criado por:',
      user: 'Joeder Blanca',
      dt_inc: '2024-04-12',
      mensage: 'Nova requisição criada no sistema',
      status: 'create'
    }
  ];


  dotTemplate(status: string): TemplateRef<any> {
    switch (status) {
      case 'create':
        return this.createTemplate;
      case 'accept':
        return this.acceptTemplate;
      case 'comment':
        return this.commentTemplate;
      case 'alertY':
        return this.alertYTemplate;
      case 'alertR':
        return this.alertRTemplate;
      case 'execute':
        return this.executeTemplate;
      default:
        return this.createTemplate;
    }
  }

  classDot(status: string): string {
    if (status === 'create') {
      return 'card-header bg-uam';
    } else if (status === 'accept') {
      return 'card-header bg-uam';
    } else if (status === 'comment') {
      return 'card-header bg-uam-primary';
    } else if (status === 'alertY') {
      return 'card-header bg-uam-warning';
    } else if (status === 'alertR') {
      return 'card-header bg-uam-danger';
    } else if (status === 'execute') {
      return 'card-header bg-uam-light';
    } else {
      return 'card-header';
    }
  }
}
