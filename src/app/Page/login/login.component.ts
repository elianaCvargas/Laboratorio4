import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/Entidades/tp-juegos/login';
import { Usuario } from 'src/Entidades/tp-juegos/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // usuario:Usuario;
  login:Login;
  email:string;
  password:string;
  constructor(public router: Router) { 
    // this.usuario =  new Usuario();
    this.login = new Login();
    this.login.usuario = new Usuario();
    this.login.usuario.email = this.email;
    this.login.usuario.password = this.password;
    // localStorage.setItem('dataSource', this.dataSource.length); 
  }

  ngOnInit(): void {
    // var  suu = this.usuario.nombre;
      // if(localStorage.getItem('usuario-isLoggeado'))
      // {
      //     // this.usuario.nombre = localStorage.getItem('usuario-nombre');
      // }

  }

  redirigir()
  {
    this.router.navigateByUrl('juego/tateti');
  }

}
