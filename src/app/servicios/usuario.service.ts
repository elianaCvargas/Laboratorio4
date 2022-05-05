import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Usuario } from 'src/Entidades/tp-juegos/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  message:string;
  constructor(private firestore: AngularFirestore
    ,private auth: AngularFireAuth) { }

    usuarioGet(email:string) {
      return new Promise<any>((resolve)=> {
          this.firestore.collection('usuario', ref => ref
            .where('email', '==', email))
            .valueChanges().subscribe(users => resolve(users))
      })
    }

    guardarUsuario(usuario: Usuario)
    {
      return this.firestore.collection('usuario').add({ ...usuario });
    }
  
}
