import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-mis-proyectos',
  templateUrl: './mis-proyectos.component.html',
  styleUrls: ['./mis-proyectos.component.css']
})
export class MisProyectosComponent implements OnInit{
  desc_chatterbot:string = "Chatterbot con información sobre la obtención del carnet de conducir, utilizando la herramienta de desarrollo Lazarus, basada en el lenguaje de programación Object Pascal.";
  desc_consultorio:string = "Proyecto desarrollado en la la herramienta de desarrollo Lazarus, basada en el lenguaje de programación Object Pascal. Permite agregar personas y sus respectivas consultas, permitiendo realizar diferentes estadísticas con dichos datos. Todos los datos son guardados en archivos locales.";
  desc_viajes_turisticos: string = "Proyecto realizado en VisualWorks (SmallTalk), dicho proyecto permite la creación y reservación de paquetes turísticos, además de disponer de distintas estadísticas basadas en los dato ingresados. Todos los datos son guardados en archivos locales.";

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
