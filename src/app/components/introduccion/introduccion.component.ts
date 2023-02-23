import { Component } from '@angular/core';

@Component({
  selector: 'app-introduccion',
  templateUrl: './introduccion.component.html',
  styleUrls: ['./introduccion.component.css']
})
export class IntroduccionComponent {
  introduccion:string = "Hola soy Gonzalo, creé este espacio para que puedan conocerme rápidamente y ver algún que otro proyecto que realicé, espero sea de su agrado y que tengan excelente día!";
  nombre:string = "Vaschchuk Gonzalo Gabriel";
}
