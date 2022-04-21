import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcularPulsacionComponent } from './calcular-pulsacion/calcular-pulsacion.component';
import { ConsultarPulsacionComponent } from './consultar-pulsacion/consultar-pulsacion.component';
import { InicioComponent } from './inicio/inicio.component';
import { PulsacionesComponent } from './pulsaciones/pulsaciones.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
     path: 'pulsaciones', component: PulsacionesComponent,
     children: [
      { path: 'calcularPulsaciones', component: CalcularPulsacionComponent },
      { path: 'consultarPulsaciones', component: ConsultarPulsacionComponent },
      { path: 'home', component: HomeComponent },
     ]
},
  
  { path: 'inicio', component: InicioComponent },
 
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
