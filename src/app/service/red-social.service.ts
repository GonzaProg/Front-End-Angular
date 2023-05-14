import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RedSocial } from '../model/redSocial.model';

@Injectable({
  providedIn: 'root'
})

export class RedSocialService {
  URL = 'https://mi-portfolio2-0.onrender.com/redesSociales/';

  constructor(private http: HttpClient) { }

  public getRedSocialFacebook(): Observable<RedSocial>{
    return this.http.get<RedSocial>(this.URL+'traer/1')
  }
  public getRedSocialGmail(): Observable<RedSocial>{
    return this.http.get<RedSocial>(this.URL+'traer/2')
  }
  public getRedSocialInstagram(): Observable<RedSocial>{
    return this.http.get<RedSocial>(this.URL+'traer/3')
  }
  public getRedSocialTwitter(): Observable<RedSocial>{
    return this.http.get<RedSocial>(this.URL+'traer/4')
  }
}