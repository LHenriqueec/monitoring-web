import { Component, Input } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Input() person: any;

  menus: Menu[] = [
    {fontSet: 'fas', fontIcon: 'fa-home', description: 'Home'},
    {fontSet: 'far', fontIcon: 'fa-building', description: 'Condomínio', childrens: [
      {fontSet: 'fas', fontIcon: 'fa-home', description: 'Testando'}
    ]},
    {fontSet: 'far', fontIcon: 'fa-money-bill-alt', description: 'Financeiro'},
    {fontSet: 'fas', fontIcon: 'fa-glass-cheers', description: 'Reserva'},
    {fontSet: 'far', fontIcon: 'fa-paper-plane', description: 'Mensageria'},
    {fontSet: 'fas', fontIcon: 'fa-file-contract', description: 'Contratos'},
    {fontSet: 'fas', fontIcon: 'fa-tools', description: 'Serviços e Manutenções'},
    {fontSet: 'far', fontIcon: 'fa-chart-bar', description: 'Relatório'},
  ];

  amountNotifications: number = 5;

  isEmpty(arr) {
    return !arr || arr.length == 0;
  }
}
