import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { DepartamentoComponent } from './departamento/departamento.component';


const routes: Routes = [
{path:'',component:HomeComponent},
{path:'funcionarios',component:FuncionariosComponent},
{path:'departamento',component:DepartamentoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
