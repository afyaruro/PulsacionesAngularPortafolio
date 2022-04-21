import { Component, OnInit } from '@angular/core';
import { PersonaServiceService } from '../persona-service.service';
import { Persona } from '../pulsacion/models/persona';

@Component({
  selector: 'app-calcular-pulsacion',
  templateUrl: './calcular-pulsacion.component.html',
  styleUrls: ['./calcular-pulsacion.component.css']
})
export class CalcularPulsacionComponent implements OnInit {
  persona: Persona;

  constructor(private personaService: PersonaServiceService) {
    this.persona = new Persona();
    this.persona.sexo = "Selecciona una opción";
  }

  ngOnInit(): void {
  }

  add(){
    alert("Se agrego" + JSON.stringify(this.persona))
    this.personaService.post(this.persona)
  }

  ValidarSexo(){
    if(this.persona.sexo == "Selecciona una opción"){
      alert("Seleccione un Sexo");
    }else{
      this.CalcularPulsacion();
    }

  }

  CalcularPulsacion(){
    if(this.persona.sexo == "Masculino"){
      this.persona.pulsacion = (210 - this.persona.edad) / 10;
    } else{
      this.persona.pulsacion = (220 - this.persona.edad) / 10;
    }

    this.add();
  }

/*
  sexomasculino() {
    this.persona.pulsacion = (210 - this.persona.edad) / 10
    this.personaservice.post(this.persona)
  }

  sexofemenino() {
    this.persona.pulsacion = (220 - this.persona.edad) / 10
    this.personaservice.post(this.persona)
  }
*/
}
