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
        // switch (err.code) {
        //   case 'auth/email-already-in-use':
        //     this.message = 'Ya existe otro usuario con el mail ingresado';
        //     break;
        //   case 'auth/invalid-email':
        //     this.message = 'El formato debe ser: xyx@midominio.com';

        //     break;
        //   case 'auth/weak-password':
        //     this.message = 'El password debe contener al menos 6 letras';
        //     break;
        //   default:
        //     this.message = err;
        //     break;
        // }

        return Promise.reject(err);
      });
  }
}
