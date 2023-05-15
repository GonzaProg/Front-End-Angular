import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-mis-proyectos',
  templateUrl: './mis-proyectos.component.html',
  styleUrls: ['./mis-proyectos.component.css']
})
export class MisProyectosComponent implements OnInit{
  
    proyectoChatterbot: Proyecto = new Proyecto("","","");
    proyectoConsultorio: Proyecto = new Proyecto("","","");
    proyectoViajesTuristicos: Proyecto = new Proyecto("","","");
  
    constructor(public proyectoService: ProyectoService){}
  
    ngOnInit(): void {
      this.proyectoService.getProyecto1().subscribe(data => {this.proyectoChatterbot = data})
      this.proyectoService.getProyecto2().subscribe(data => {this.proyectoConsultorio = data})
      this.proyectoService.getProyecto3().subscribe(data => {this.proyectoViajesTuristicos = data})
    }
  
  }
