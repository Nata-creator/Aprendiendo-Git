import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular_NN');

   public comprobarLog(){
    if (1 == 1) {
      console.log("Hola soy una funcion de prueba");
      console.log("para aprender GIt");
    }
   }

}
