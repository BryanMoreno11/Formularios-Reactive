import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioTemplateComponent } from './components/formulario-template/formulario-template.component';
import { FormularioReactivoComponent } from './components/formulario-reactivo/formulario-reactivo.component';

const routes: Routes = [
{path:"template",component:FormularioTemplateComponent},
{path:"reactivo", component:FormularioReactivoComponent},

{path:"**",pathMatch:"full", redirectTo:"template" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
