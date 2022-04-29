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
    this.login = new Login();
    // localStorage.setItem('dataSource', this.dataSource.length); 
  }

  ngOnInit(): void {


  }

  loggear()
  {
    //cambiar por servicio a user auth
      if(this.login.loggear())
      {
       
        localStorage.setItem("usuario",  JSON.stringify(this.login));
        var a =JSON.parse(localStorage.getItem('usuario') ?? '');
        this.router.navigateByUrl('juego');
      }
  }

  redirigir()
  {
    this.router.navigateByUrl('juego/tateti');
  }

}
