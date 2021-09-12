import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { HomeComponent } from './home/home.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cadastro-funcionàrios';

  // menuAtivo():  void {
  //   let menu = document.querySelectorAll("p").forEach(e => {
  //     let destaque = e.textContent
  //     if(destaque = "home") {
  //       e.classList.add("active");
  //     } else if(destaque = "funcionarios") {
  //       e.classList.add("active");
  //     } else if(destaque = "departamento") {
  //       e.classList.add("active")
  //     }
  //   })

  // }

  // rotaAtiva(): void {
  //   let rota = document.querySelectorAll("routerLink").forEach(e => {
  //     let rotaDestacada = e.getAttribute.name
  //     if(rotaDestacada == ""){
  //       e.classList.add("active");
  //     } else if(rotaDestacada == "funcionarios") {
  //       e.classList.add("active");
  //     } else if(rotaDestacada == "departamento") {
  //       e.classList.add("active")
  //     }
  //   })
  // }

  

}
