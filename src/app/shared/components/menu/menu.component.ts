import { Component, Input } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Input() person: any;

  menus: any = [
    {fontSet: 'fas', fontIcon: 'fa-home', description: 'Home'},
    {fontSet: 'far', fontIcon: 'fa-building', description: 'Condomínio'},
    {fontSet: 'far', fontIcon: 'fa-money-bill-alt', description: 'Financeiro'},
    {fontSet: 'fas', fontIcon: 'fa-glass-cheers', description: 'Reserva'},
    {fontSet: 'far', fontIcon: 'fa-paper-plane', description: 'Mensageria'},
    {fontSet: 'fas', fontIcon: 'fa-file-contract', description: 'Contratos'},
    {fontSet: 'fas', fontIcon: 'fa-tools', description: 'Serviços e Manutenções'},
    {fontSet: 'far', fontIcon: 'fa-chart-bar', description: 'Relatório'},
  ];

  amountNotifications: number = 5;

}
