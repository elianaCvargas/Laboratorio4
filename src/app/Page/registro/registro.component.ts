import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RegistroService } from 'src/app/servicios/registro.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/Entidades/tp-juegos/usuario';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  email: string;
  password:string;
  mensaje:string;
  nombre:string;
  apellido:string;
  registroOk: boolean = false;
  hayError: boolean = false;
  usuario: Usuario;
  constructor(private registroService: RegistroService, private route: Router) { 
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
  }

  registrar()
  {

      this.registroService.registroPost(this.email, this.password).then(data => {
        var result = data;
        this.registroOk =  true;
        this.usuario.nombre =  this.nombre;
        this.usuario.apllido =  this.apellido;
        localStorage.setItem("usuario",  JSON.stringify(this.usuario));

        setTimeout(() => {
          this.route.navigateByUrl('');
        }, 6000);
      }).catch(err => {
        console.log(err);
        this.registroOk = false;
        this.mensaje = err;
      });
  }



}
