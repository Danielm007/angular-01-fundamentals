import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000,
  };

  constructor() {}

  // agregar() {
  //   if (this.nuevo.nombre.trim().length === 0) {
  //     return;
  //   }
  //   this.personajes.push(this.nuevo);
  //   this.nuevo = { nombre: '', poder: 0 };
  // }
}
