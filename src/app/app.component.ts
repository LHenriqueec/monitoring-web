import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'church-app';

  person = {
    avatar: 'assets/images/avatar.jpg',
    name: 'Neitiri',
    office: 'Secretária'
  }
}
