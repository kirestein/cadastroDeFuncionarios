import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor(protected service:SharedService) { }

  DepartmentoList:any=[];

  ModalTitle!:string;
  ActivateAddEditDepComp:boolean=false;
  dep!:any;

  DepartmentoIdFilter:string="";
  DepartmentoNameFilter:string="";
  DepartmentoListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshDepList();
  }

  addClick(){
    this.dep={
      DepartmentoId:0,
      DepartmentoName:""
    }
    this.ModalTitle="Adicionar Departamento";
    this.ActivateAddEditDepComp=true;

  }

  editClick(item:any){
    this.dep=item;
    this.ModalTitle="Editar Departamento";
    this.ActivateAddEditDepComp=true;
  }

  deleteClick(item:any){
    if(confirm('Quer, mesmo, excluir este registro?')){
      this.service.deleteDepartmento(item.DepartmentId).subscribe(data=>{
        alert(data.toString());
        this.refreshDepList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshDepList();
  }


  refreshDepList(){
    this.service.getDepList().subscribe(data=>{
      this.DepartmentoList=data;
      this.DepartmentoListWithoutFilter=data;
    });
  }

  FilterFn(){
    var DepartmentoIdFilter = this.DepartmentoIdFilter;
    var DepartmentoNameFilter = this.DepartmentoNameFilter;

    this.DepartmentoList = this.DepartmentoListWithoutFilter.filter(function (el:any){
        return el.DepartmentoId.toString().toLowerCase().includes(
          DepartmentoIdFilter.toString().trim().toLowerCase()
        )&&
        el.DepartmentName.toString().toLowerCase().includes(
          DepartmentoNameFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop:any,asc:any){
    this.DepartmentoList = this.DepartmentoListWithoutFilter.sort(function(a:any,b:any){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}
