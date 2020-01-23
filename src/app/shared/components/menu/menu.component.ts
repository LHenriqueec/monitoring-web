import { Component, Input } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Input() person: any;

  menus: Menu[] = [
    {fontSet: 'fas', fontIcon: 'fa-home', description: 'Home', router: 'home'},
    {fontSet: 'far', fontIcon: 'fa-building', description: 'Condomínio', childrens: [
      {fontSet: 'fas', fontIcon: 'fa-users', description: 'Moradores', router: 'condominium/residents'}
    ]},
    {fontSet: 'far', fontIcon: 'fa-money-bill-alt', description: 'Financeiro', router: 'finance'},
    {fontSet: 'fas', fontIcon: 'fa-glass-cheers', description: 'Reserva', router: 'reservation'},
    {fontSet: 'far', fontIcon: 'fa-paper-plane', description: 'Mensageria', router: 'messages'},
    {fontSet: 'fas', fontIcon: 'fa-file-contract', description: 'Contratos', router: 'contracts'},
    {fontSet: 'fas', fontIcon: 'fa-tools', description: 'Serviços e Manutenções', router: 'services'},
    {fontSet: 'far', fontIcon: 'fa-chart-bar', description: 'Relatório', router: 'reports'},
  ];

  amountNotifications: number = 5;

  isEmpty(arr) {
    return !arr || arr.length == 0;
  }
}
