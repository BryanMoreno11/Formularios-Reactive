import { Component } from '@angular/core';
import { PersonaService,persona } from 'src/app/services/persona.service';

@Component({
  selector: 'app-formulario-template',
  templateUrl: './formulario-template.component.html',
  styleUrls: ['./formulario-template.component.css']
})
export class FormularioTemplateComponent {
 

  person:persona={
  cedula:"",
  nombre:"",
  fechaNacimiento:"",
  ciudad:""
  }




  create(){


    
  window.alert("Se ha ingresado correctamente el registro de la persona "+this.person.nombre+" de cedula: "+this.person.cedula)
  }

  delete(){
  this.person.nombre="";
  this.person.ciudad=" ";
  this.person.cedula="";
  this.person.fechaNacimiento="";

  }


  constructor(private persona:PersonaService){

  }

}
