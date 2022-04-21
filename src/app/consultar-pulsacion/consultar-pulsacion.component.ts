import { Component, OnInit } from '@angular/core';
import { PersonaServiceService } from '../persona-service.service';
import { Persona } from '../pulsacion/models/persona';

@Component({
  selector: 'app-consultar-pulsacion',
  templateUrl: './consultar-pulsacion.component.html',
  styleUrls: ['./consultar-pulsacion.component.css']
})
export class ConsultarPulsacionComponent implements OnInit {
  personas: Persona[] = [];
  constructor(private personaService: PersonaServiceService) { 
    
  }

  ngOnInit(): void {
    this.personas = this.personaService.get();
  }


}
