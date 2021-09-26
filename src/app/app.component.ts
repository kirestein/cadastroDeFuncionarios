import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { HomeComponent } from './home/home.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cadastro-funcionàrios';

  constructo(){}

  ngOnInit(){
    document.querySelectorAll(".nav-link").forEach(a => {
      a.addEventListener("click", () => {
        a.classList.add("active");
        document.querySelectorAll(".nav-link").forEach(b => {
          b.addEventListener("click",  () => {
            a.classList.remove("active");
            b.classList.add("active")
          })
        })
      })
    })
  }




  }




