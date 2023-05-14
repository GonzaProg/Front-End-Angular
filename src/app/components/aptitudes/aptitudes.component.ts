import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/model/habilidad.model';
import { HabilidadService } from 'src/app/service/habilidad.service';

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})

export class AptitudesComponent implements OnInit{

  habilidadCSS: Habilidad = new Habilidad("","","");
  habilidadAngular: Habilidad = new Habilidad("","","");
  habilidadHTML5: Habilidad = new Habilidad("","","");
  habilidadLispWorks: Habilidad = new Habilidad("","","");
  habilidadSWIProlog: Habilidad = new Habilidad("","","");
  habilidadLazarus: Habilidad = new Habilidad("","","");

  constructor(public habilidadService: HabilidadService){}

  ngOnInit(): void {
    this.habilidadService.getHabilidad1().subscribe(data => {this.habilidadCSS = data})
    this.habilidadService.getHabilidad2().subscribe(data => {this.habilidadAngular = data})
    this.habilidadService.getHabilidad3().subscribe(data => {this.habilidadHTML5 = data})
    this.habilidadService.getHabilidad4().subscribe(data => {this.habilidadLispWorks = data})
    this.habilidadService.getHabilidad5().subscribe(data => {this.habilidadSWIProlog = data})
    this.habilidadService.getHabilidad6().subscribe(data => {this.habilidadLazarus = data})
  }

}