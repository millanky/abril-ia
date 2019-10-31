import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeguridadComponent } from './Seguridad/seguridad.component';
import { EnergiaComponent } from './Energia/energia.component';
import { PacientesComponent } from './Pacientes/pacientes.component';
import { InteligenciaComponent } from './Inteligencia/inteligencia.component';
import { HomeComponent } from './Home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SeguridadComponent,
    EnergiaComponent,
    PacientesComponent,
    InteligenciaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
