import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/service';
import { ShowDepComponent } from '../show-dep/show-dep.component';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent extends ShowDepComponent implements OnInit {

  constructor(
    protected service:SharedService,
    protected router: Router) {
    super(service);
  }

  @Input() dep:any;

  public DepartmentoName!:string;
  public DepartamentId!: number;


  ngOnInit(): void {

    this.DepartmentoName=this.dep.DepartmentoName;
  }

  // criarDepartamento() {
  //   this.http.post("http://localhost:8080/departmentos/criarDepartamentos", { nomeDepartamento : this.addEditDepComponent.DepartmentoName }).subscribe();
  //   this.addEditDepComponent.DepartmentoName = "";
  //   // window.location.href = '/departamentos';
  // }

  addDepartmento(){
    var val = {nomeDepartamento:this.DepartmentoName};
    this.service.addDepartmento(val).subscribe();

    this.closeClick();
  }

  updateDepartment(){
    var val = {nomeDepartamento:this.DepartmentoName};

    this.service.updateDepartmento(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
