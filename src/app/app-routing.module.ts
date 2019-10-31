import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { SeguridadComponent } from './Seguridad/seguridad.component';
import { EnergiaComponent } from './Energia/energia.component';
import { AppComponent } from './app.component';
import { InteligenciaComponent } from './Inteligencia/inteligencia.component';
import { PacientesComponent } from './Pacientes/pacientes.component';
import { HomeComponent } from './Home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'energia', component: EnergiaComponent },
  { path: 'inteligencia', component: InteligenciaComponent },
  { path: 'pacientes', component: PacientesComponent },
  { path: 'seguridad', component: SeguridadComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
