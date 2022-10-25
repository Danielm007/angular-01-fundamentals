import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  // template: ` <h1>Hola de nuevo</h1> `,
})
export class AppComponent {
  title: string = 'Contador App';
  number: number = 0;
  base: number = 5;

  acumular(valor: number) {
    this.number += valor;
  }

  // sumar() {
  //   this.number += 1;
  // }

  // restar() {
  //   this.number -= 1;
  // }
}
