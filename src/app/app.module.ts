import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartamentoComponent } from './departamento/departamento.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { AddEditDepComponent } from './departamento/add-edit-dep/add-edit-dep.component';
import { ShowDepComponent } from './departamento/show-dep/show-dep.component';
import { AddEdiFuncComponent } from './funcionarios/add-edi-func/add-edi-func.component';
import { ShowFuncComponent } from './funcionarios/show-func/show-func.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { SharedService } from './service';


@NgModule({
  declarations: [
    AppComponent,
    DepartamentoComponent,
    FuncionariosComponent,
    AddEditDepComponent,
    ShowDepComponent,
    AddEdiFuncComponent,
    ShowFuncComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
