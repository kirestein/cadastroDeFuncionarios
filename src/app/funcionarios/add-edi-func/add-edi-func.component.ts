import { SharedService } from 'src/app/shared.service';
import { Component, OnInit, Input } from '@angular/core';
import { ShowFuncComponent } from '../show-func/show-func.component';

@Component({
  selector: 'app-add-edi-func',
  templateUrl: './add-edi-func.component.html',
  styleUrls: ['./add-edi-func.component.css']
})
export class AddEdiFuncComponent implements OnInit {
  constructor(private service:SharedService) { }

  @Input() func:any;
  FuncionarioId!:string;
  FuncionarioName!:string;
  Departmento!:string;
  DataDeInicio!:string;
  ArquivoFoto!:string;
  PhotoFilePath!:string;

  DepartmentosList:any=[];

  ngOnInit(): void {
    this.loadDepartmentList();
  }

  loadDepartmentList(){
    this.service.getAllDepartmentNames().subscribe((data:any)=>{
      this.DepartmentosList=data;

      this.FuncionarioId=this.func.FuncionarioId;
      this.FuncionarioName=this.func.FuncionarioName;
      this.Departmento=this.func.Departmento;
      this.DataDeInicio=this.func.DataDeInicio;
      this.ArquivoFoto=this.func.ArquivoFoto;
      this.PhotoFilePath=this.service.PhotoUrl+this.ArquivoFoto;
    });
  }

  addEmployee(){
    var val = {FuncionarioId:this.FuncionarioId,
                FuncionarioName:this.FuncionarioName,
                Departmento:this.Departmento,
              DataDeInicio:this.DataDeInicio,
            ArquivoFoto:this.ArquivoFoto};

    this.service.addFuncionario(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateFuncionario(){
    var val = {FuncionarioId:this.FuncionarioId,
      FuncionarioName:this.FuncionarioName,
      Departmento:this.Departmento,
    DataDeInicio:this.DataDeInicio,
  ArquivoFoto:this.ArquivoFoto};

    this.service.updateFuncionario(val).subscribe(res=>{
    alert(res.toString());
    });
  }


  uploadPhoto(event:any){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.ArquivoFoto=data.toString();
      this.PhotoFilePath=this.service.PhotoUrl+this.ArquivoFoto;
    })
  }

}
