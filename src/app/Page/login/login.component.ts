import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';
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
  constructor(public router: Router, private loginService:LoginService) { 
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
        var usuario = new Usuario();

        this.login.fecha = new Date().toLocaleDateString();
     
        // var a =JSON.parse(localStorage.getItem('usuario') ?? '');
        this.loginService.guardar(this.login).then(data => {
          //traer usuario
          localStorage.setItem("usuario",  JSON.stringify(usuario));
          this.router.navigateByUrl('juego');
        }).catch(message => {
          console.log(message);
        });
      }
  }

  redirigir()
  {
    this.router.navigateByUrl('juego/tateti');
  }

}
