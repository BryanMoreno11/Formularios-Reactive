import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PersonaService, persona } from 'src/app/services/persona.service';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent implements OnInit {
  items: any[] = [];
  checkoutForm: FormGroup;

  constructor(private _personaServicio:PersonaService, private _formBuilder:FormBuilder){
    this.checkoutForm = this._formBuilder.group({
      cedula: '',
      nombre: '',
      fechaNacimiento: '',
      ciudad: ['']
    });
  }

  ngOnInit(){
    this.items = this._personaServicio.getItems();
  }

  onSubmit(datos:persona){
    this.checkoutForm.reset();
    window.alert('Las datos han sido guardados: Nombre = ' + datos.nombre + ", Cédula = " + datos.cedula);
  }

  delete(){
    this.checkoutForm.reset();
  }


}
