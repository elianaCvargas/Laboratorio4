import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { window } from 'rxjs';
import { LoginService } from 'src/app/servicios/login.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Login } from 'src/Entidades/tp-juegos/login';
import { Usuario } from 'src/Entidades/tp-juegos/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Login;
  email: string;
  password: string;
  constructor(public router: Router, private loginService: LoginService, private usuarioService: UsuarioService) {
    this.login = new Login();
  }

  ngOnInit(): void {


  }

  loggear() {
    this.login.fecha = new Date().toLocaleDateString();

    this.loginService.login(this.email, this.password).then(data => {
      this.usuarioService.usuarioGet(this.email)
        .then(data => {
          var usuario = new Usuario();
          usuario.nombre = data[0].nombre;
          usuario.apellido = data[0].apellido;
          usuario.email = data[0].email;
          localStorage.setItem("usuario", JSON.stringify(usuario));
          this.router.navigate(['juego']).then(() => {
            location.reload()
          });

        })

    }).catch(message => {
      console.log(message);
    });
  }

  redirigir() {
    this.router.navigateByUrl('juego/tateti');
  }

}
