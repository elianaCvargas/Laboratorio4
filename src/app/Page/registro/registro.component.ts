import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RegistroService } from 'src/app/servicios/registro.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/Entidades/tp-juegos/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  email: string;
  password:string;
  password2:string;
  mensaje:string;
  nombre:string;
  apellido:string;
  registroOk: boolean = false;
  sonIguales: boolean = false;
  usuario: Usuario;
  constructor(private registroService: RegistroService, private usuarioService: UsuarioService, private route: Router) { 
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
  }

  registrar()
  {

      this.registroService.registroPorAuth(this.email, this.password).then(data => {
        var result = data;
        this.registroOk =  true;
        this.usuario.nombre =  this.nombre;
        this.usuario.apellido =  this.apellido;
        this.usuario.email = this.email;
        this.usuarioService.guardarUsuario(this.usuario)
          .then(data => {
              localStorage.setItem("usuario",  JSON.stringify(this.usuario));
              setTimeout(() => {
                this.route.navigateByUrl('');
              }, 3000);
          }).catch(err => {
            console.log(err);
          });
        
      }).catch(err => {
        console.log(err);
        this.registroOk = false;
        this.mensaje = err;
      });
  }

  verificarPassword()
  {
    this.sonIguales = this.password == this.password2;
  }



}
