import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="http://localhost:53535/api";
readonly PhotoUrl = "http://localhost:53535/Photos/";

  constructor(private http:HttpClient) { }

  getDepList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/departmento');
  }

  addDepartmento(val:any){
    return this.http.post(this.APIUrl+'/Departmento',val);
  }

  updateDepartmento(val:any){
    return this.http.put(this.APIUrl+'/Departmento',val);
  }

  deleteDepartmento(val:any){
    return this.http.delete(this.APIUrl+'/Departmento/'+val);
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

  deleteFuncionario(val:any){
    return this.http.delete(this.APIUrl+'/Funcionarios/'+val);
  }


  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Funcionarios/SaveFile',val);
  }

  getAllDepartmentNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Funcionarios/GetAllDepartmentNames');
  }

}
