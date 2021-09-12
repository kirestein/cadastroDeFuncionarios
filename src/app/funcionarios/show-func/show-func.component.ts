import { SharedService } from 'src/app/service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-func',
  templateUrl: './show-func.component.html',
  styleUrls: ['./show-func.component.css']
})
export class ShowFuncComponent implements OnInit {

  FuncionarioList:any=[];

  Titulo!:string;
  ActivateAddEditFuncComp:boolean=false;
  func:any;

  constructor(private service:SharedService) { }

  ngOnInit(): void {
  }

  addClick(){
    this.func={
      FuncionarioId:0,
      FuncionarioName:"",
      Departmento:"",
      DataDeInicio:"",
      ArquivoFoto:""
    }
    this.Titulo="Adicionar Dados do Funcionário";
    this.ActivateAddEditFuncComp=true;

  }

  editClick(item:any){
    console.log(item);
    this.func=item;
    this.Titulo="Editar dados do Funcinário";
    this.ActivateAddEditFuncComp=true;
  }

  deleteClick(item:any){
    if(confirm('Quer mesmo excluir este registro?')){
      this.service.deleteFuncionario(item.FuncionarioId).subscribe(data=>{
        alert(data.toString());
        this.refreshFuncList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditFuncComp=false;
    this.refreshFuncList();
  }


  refreshFuncList(){
    this.service.getFuncList().subscribe(data=>{
      this.FuncionarioList=data;
    });
  }

}
