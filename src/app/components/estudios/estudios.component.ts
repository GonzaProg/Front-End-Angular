import { Component, OnInit } from '@angular/core';
import { Estudio } from 'src/app/model/estudio.model';
import { EstudioService } from 'src/app/service/estudio.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})

export class EstudiosComponent implements OnInit{
  
  descripExtra:string = "- También tengo conocimientos sobre la creación y acotación de planos, tanto eléctricos como generales.";


    estudio: Estudio = new Estudio("","","","","","");
  
    constructor(public estudioService: EstudioService){}
  
    ngOnInit(): void {
      this.estudioService.getEstudio().subscribe(data => {this.estudio = data})
    }
  
  }
