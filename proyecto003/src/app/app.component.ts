import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto003';
  valor1: number;
  valor2: number;
  valor3: number;
  resultado: string="";
  constructor() {
    this.valor1 = this.retornoAleatorio();
    this.valor2 = this.retornoAleatorio();
    this.valor3 = this.retornoAleatorio();
  }

  retornoAleatorio(): number {
    return Math.floor(Math.random() * 6) + 1;
  }

  tirar(){
    this.valor1 = this.retornoAleatorio();
    this.valor2 = this.retornoAleatorio();
    this.valor3 = this.retornoAleatorio();
    if (this.valor1 == this.valor2 && this.valor2 == this.valor3) {
      this.resultado = "Ganaste";
    }
    else {
      this.resultado = "Perdiste";
    }
  }
}
