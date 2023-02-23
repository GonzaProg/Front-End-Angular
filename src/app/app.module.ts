import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IntroduccionComponent } from './components/introduccion/introduccion.component';
import { AptitudesComponent } from './components/aptitudes/aptitudes.component';
import { MisProyectosComponent } from './components/mis-proyectos/mis-proyectos.component';
import { FinalComponent } from './components/final/final.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroduccionComponent,
    AptitudesComponent,
    MisProyectosComponent,
    FinalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
