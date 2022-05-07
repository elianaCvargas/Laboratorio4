import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { RegistroService } from 'src/app/servicios/registro.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/Entidades/tp-juegos/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  mensaje: string;
  registroOk: boolean = false;
  sonIguales: boolean = false;
  usuario: Usuario;
  public registroFormulario: FormGroup;
  constructor(private registroService: RegistroService, private usuarioService: UsuarioService, private route: Router
    , private fb: FormBuilder) {
    this.usuario = new Usuario();

  }

  ngOnInit(): void {
    this.registroFormulario = this.fb.group({
      nombre: ['', { validators: [Validators.required], updateOn: 'blur' }],
      apellido: ['', { validators: [Validators.required], updateOn: 'blur' }],
      email: ['', { validators: [Validators.required, Validators.email] }],
      password1: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required]]
    });

  }

  registrar() {

    this.registroService.registroPorAuth(this.email(), this.password2()).then(data => {
      var result = data;
      this.registroOk = true;
      this.usuario.nombre = this.nombre();
      this.usuario.apellido = this.apellido();
      this.usuario.email = this.email();
      this.usuarioService.guardarUsuario(this.usuario)
        .then(data => {
          localStorage.setItem("usuario", JSON.stringify(this.usuario));
          setTimeout(() => {
            this.route.navigate(['juego']).then(() => {
              location.reload()
            });
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

  private verificarPass(control: AbstractControl) {
    const nombre = <string>control.value;
    const apellido = control.value;
    // const pass = this.password2;
    const spaces = nombre.includes(' ');

    return spaces
      ? { containsSpaces: true }
      : null;
  }

  // verificarPass(fb: FormGroup): null | ValidationErrors {
  //   const esIgual = fb.controls['password1']?.value == fb?.controls['password2']?.value;
  //   return esIgual ? null : { sonIguales: true };
  // }

  // checkPasswords(control: AbstractControl): null | object { // here we have the 'passwords' group
  //   const confirmPassword = control.value == this.password2;
  //   return confirmPassword ? null : { notSame: true }
  // }

  nombre() {
    return this.registroFormulario.controls['nombre'].value;
  }

  apellido() {
    return this.registroFormulario.controls['apellido'].value;
  }

  email() {
    return this.registroFormulario.controls['email'].value;
  }

  password1() {
    return this.registroFormulario.controls['password1'].value;
  }

  password2() {
    return this.registroFormulario.controls['password2'].value;
  }

}
