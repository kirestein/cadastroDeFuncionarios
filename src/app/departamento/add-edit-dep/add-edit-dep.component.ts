import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/service';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() dep:any;
  DepartmentoId!:string;
  DepartmentoName!:string;

  ngOnInit(): void {
    this.DepartmentoId=this.dep.DepartmentoId;
    this.DepartmentoName=this.dep.DepartmentoName;
  }

  addDepartmento(){
    var val = {DepartmentoId:this.DepartmentoId,
                DepartmentoName:this.DepartmentoName};
    this.service.addDepartmento(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateDepartment(){
    var val = {DepartmentoId:this.DepartmentoId,
      DepartmentoName:this.DepartmentoName};
    this.service.updateDepartmento(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
