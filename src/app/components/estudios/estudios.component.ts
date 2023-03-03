import { Component } from '@angular/core';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent {
  titulo:string = "Técnico Mecánico Electricista";
  institucion:string = "Terminé la educación secundaria en la Escuela de Educación Técnica 'Dr Osvaldo Magnasco' de Rosario del Tala, Entre Ríos.";
  fechaI:string = "01/01/2013";
  fechaF:string = "01/01/2020";
  descrip1:string = "- Durante dicho periodo desarrollé los conocimientos básicos sobre la electrícidad y a su vez, desarrollé prácticas sobre conecciones eléctricas básicas.";
  descrip2:string = "- También tengo conocimientos sobre la creación y acotación de planos, tanto eléctricos como generales.";
}
