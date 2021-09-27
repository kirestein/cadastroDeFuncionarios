
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { DepartamentoObj } from '../departamento/show-dep/show-dep.component';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="http://localhost:8080/";
readonly PhotoUrl = "http://localhost:8080/Photos/";

  constructor(private http:HttpClient) { }

  getDepList():Observable<DepartamentoObj[]>{
    return this.http.get<DepartamentoObj[]>(this.APIUrl+'departamentos/listarDepartamentos');
  }



  addDepartmento(val:any){
    return this.http.post(this.APIUrl+'departamentos/criarDepartamentos', val);
  }

  updateDepartmento(nome: any){
    return this.http.put(this.APIUrl+`departamentos/atualizar=`, nome);
  }

  deleteDepartmento(id: number){
    return this.http.delete(this.APIUrl+`departamentos/deletar=${id}`);
  }


  getFuncList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Funcionarios');
  }

  addFuncionario(val:any){
    return this.http.post(this.APIUrl+'/Funcionarios',val);
  }

  updateFuncionario(val:any){
    return this.http.put(this.APIUrl+'/Funcionarios',val);
  }

  deleteFuncionario(val:any, id: number){
    return this.http.delete(this.APIUrl+`funcionarios/delete=${id}`+val);
  }


  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Funcionarios/SaveFile',val);
  }

  getAllDepartmentosNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Funcionarios/GetAllDepartmentNames');
  }

}
