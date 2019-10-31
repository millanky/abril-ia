import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public title: String;
  private _usuarioLogado = false;

  constructor() {
    this.title = 'Sistema de control de Abril';
  }

  ngOnInit() {
    console.log('Se ha cargado el componente Home');
  }
}
