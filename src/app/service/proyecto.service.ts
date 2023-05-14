import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto.model';

@Injectable({
  providedIn: 'root'
})

export class ProyectoService {
  URL = 'https://mi-portfolio2-0.onrender.com/proyectos/';

  constructor(private http: HttpClient) { }

  public getProyecto1(): Observable<Proyecto>{
    return this.http.get<Proyecto>(this.URL+'traer/1')
  }
  public getProyecto2(): Observable<Proyecto>{
    return this.http.get<Proyecto>(this.URL+'traer/5')
  }
  public getProyecto3(): Observable<Proyecto>{
    return this.http.get<Proyecto>(this.URL+'traer/6')
  }
}
