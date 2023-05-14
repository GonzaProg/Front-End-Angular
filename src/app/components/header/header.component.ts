import { Component, OnInit } from '@angular/core';
import { RedSocial } from 'src/app/model/redSocial.model';
import { RedSocialService } from 'src/app/service/red-social.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{

  redSocialFacebook: RedSocial = new RedSocial("","","");
  redSocialInstagram: RedSocial = new RedSocial("","","");
  redSocialTwitter: RedSocial = new RedSocial("","","");

  constructor(public redSocialService: RedSocialService){}

  ngOnInit(): void {
    this.redSocialService.getRedSocialFacebook().subscribe(data => {this.redSocialFacebook = data})
    this.redSocialService.getRedSocialInstagram().subscribe(data => {this.redSocialInstagram = data})
    this.redSocialService.getRedSocialTwitter().subscribe(data => {this.redSocialTwitter = data})
  }

}