import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  id: number;
  desc: string;
  precio: number;

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    this.desc = this.route.snapshot.params['desc'];
    this.precio = this.route.snapshot.params['precio'];
  }

  ngOnInit(): void {
    
  }

}
