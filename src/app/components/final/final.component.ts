import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { RedSocial } from 'src/app/model/redSocial.model';
import { PersonaService } from 'src/app/service/persona.service';
import { RedSocialService } from 'src/app/service/red-social.service';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})

export class FinalComponent implements OnInit{


  redSocialGmail: RedSocial = new RedSocial("","","");
  persona: Persona = new Persona("","","","");

  constructor(public redSocialService: RedSocialService,
              public personaService: PersonaService){}
  

  ngOnInit(): void {
    this.redSocialService.getRedSocialGmail().subscribe(data => {this.redSocialGmail = data})
    this.personaService.getPersona().subscribe(data1 => {this.persona = data1})
  }

}
