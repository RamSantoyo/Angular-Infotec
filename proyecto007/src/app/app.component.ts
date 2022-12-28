import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  vector = [1,2,3,4,5,6,7];
  nombre = "Ramsess Santoyo";
  saldo = 100.50;
  dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
  articulos = [
    {
    codigo: 1,
    descripcion: 'Papas',
    precio: 12.50
  },
  {
    codigo: 2,
    descripcion: 'Manzanas',
    precio: 10.50
  }
];
fecha = new Date();
}
