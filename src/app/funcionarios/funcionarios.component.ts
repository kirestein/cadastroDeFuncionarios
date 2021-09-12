import { SharedService } from '../service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  constructor(private  service:SharedService) { }

  FuncionarioList:any = []
  Titulo!:string
  ActivateAddEdditFuncComp:boolean = false
  func: any
  ngOnInit(): void {
  }

  addClick() {
    this.func={
      FuncionarioId:0,
      FuncionarioName:"",
      Departamento:"",
      DataDeInicio:"",
      AquirvoFoto:""
    }

    this.Titulo="Adicionar Novo Funcionário"
    this.ActivateAddEdditFuncComp=true
  }



}
