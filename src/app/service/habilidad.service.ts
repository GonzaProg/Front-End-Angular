import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../model/habilidad.model';

@Injectable({
  providedIn: 'root'
})

  export class HabilidadService {
    URL = 'https://mi-portfolio2-0.onrender.com/habilidades/';
  
    constructor(private http: HttpClient) { }
  
    public getHabilidad1(): Observable<Habilidad>{
      return this.http.get<Habilidad>(this.URL+'traer/1')
    }
    public getHabilidad2(): Observable<Habilidad>{
      return this.http.get<Habilidad>(this.URL+'traer/2')
    }
    public getHabilidad3(): Observable<Habilidad>{
      return this.http.get<Habilidad>(this.URL+'traer/3')
    }
    public getHabilidad4(): Observable<Habilidad>{
      return this.http.get<Habilidad>(this.URL+'traer/4')
    }
    public getHabilidad5(): Observable<Habilidad>{
      return this.http.get<Habilidad>(this.URL+'traer/5')
    }
    public getHabilidad6(): Observable<Habilidad>{
      return this.http.get<Habilidad>(this.URL+'traer/6')
    }
  }
