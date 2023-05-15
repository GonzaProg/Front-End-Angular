import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RedSocial } from 'src/app/model/redSocial.model';
import { RedSocialService } from 'src/app/service/red-social.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{
  isLogged = false;

  redSocialFacebook: RedSocial = new RedSocial("","","");
  redSocialInstagram: RedSocial = new RedSocial("","","");
  redSocialTwitter: RedSocial = new RedSocial("","","");

  constructor(public redSocialService: RedSocialService,
              private router: Router,
              private tokenService: TokenService){}

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else {
      this.isLogged=false;
    }
    this.redSocialService.getRedSocialFacebook().subscribe(data => {this.redSocialFacebook = data})
    this.redSocialService.getRedSocialInstagram().subscribe(data => {this.redSocialInstagram = data})
    this.redSocialService.getRedSocialTwitter().subscribe(data => {this.redSocialTwitter = data})
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

  login(){
    this.router.navigate(['/login'])
  }

}