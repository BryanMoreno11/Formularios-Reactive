import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  Personas: persona[] = [];

  constructor() { }

  
getItems():persona[]{
  return this.Personas;
}

addItem(Persona:persona){
  this.Personas.push(Persona);
}

}



export interface persona{
  cedula:string;
  nombre:string;
  fechaNacimiento:string;
  ciudad:string;
}





