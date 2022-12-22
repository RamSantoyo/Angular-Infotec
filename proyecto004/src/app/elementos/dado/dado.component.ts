import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent implements OnInit {
  @Input() valor: number = this.numeroAleatorio();

  numeroAleatorio(): number {
    return Math.floor(Math.random() * 6) + 1;
  }

  constructor() { }

  ngOnInit() {
  }

}
