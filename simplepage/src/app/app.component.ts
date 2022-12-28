import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  active = 0;

  pop() {
    if(this.active == 0) {
      this.active = 1;
    }
    else if(this.active == 1) {
      this.active = 0;
    }
  }
}
