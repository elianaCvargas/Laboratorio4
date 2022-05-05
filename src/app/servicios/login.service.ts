import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Login } from 'src/Entidades/tp-juegos/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private firestore: AngularFirestore, private auth: AngularFireAuth) { }

  guardar(login: Login)
  {
    return this.firestore.collection('login').add({ ...login });
  }

  login(email: string, pass: string): Promise<any> {
    return this.auth
      .signInWithEmailAndPassword(email, pass)
      .then(res => {
        var result = res;
        return res;
      })
      .catch((err) => {
        //armar una alerta si hay  algun error en  la conexion
        return Promise.reject(err);
      });
  }
}
