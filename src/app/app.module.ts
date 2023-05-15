import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IntroduccionComponent } from './components/introduccion/introduccion.component';
import { AptitudesComponent } from './components/aptitudes/aptitudes.component';
import { MisProyectosComponent } from './components/mis-proyectos/mis-proyectos.component';
import { FinalComponent } from './components/final/final.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import { interceptorProvider } from './service/interceptor-service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroduccionComponent,
    AptitudesComponent,
    MisProyectosComponent,
    FinalComponent,
    EstudiosComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
