import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudio } from '../model/estudio.model';

@Injectable({
  providedIn: 'root'
})

export class EstudioService {
  URL = 'https://mi-portfolio2-0.onrender.com/estudios/';

  constructor(private http: HttpClient) { }

  public getEstudio(): Observable<Estudio>{
    return this.http.get<Estudio>(this.URL+'traer/1')
  }
}
