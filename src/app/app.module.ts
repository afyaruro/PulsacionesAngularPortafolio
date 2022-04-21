import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcularPulsacionComponent } from './calcular-pulsacion/calcular-pulsacion.component';
import { ConsultarPulsacionComponent } from './consultar-pulsacion/consultar-pulsacion.component';
import { InicioComponent } from './inicio/inicio.component';
import { PulsacionesComponent } from './pulsaciones/pulsaciones.component';
import { PersonaServiceService } from './persona-service.service';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcularPulsacionComponent,
    ConsultarPulsacionComponent,
    InicioComponent,
    PulsacionesComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PersonaServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
