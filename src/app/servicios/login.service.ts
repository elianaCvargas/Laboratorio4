import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Login } from 'src/Entidades/tp-juegos/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private firestore: AngularFirestore) { }

  guardar(login: Login)
  {
    return this.firestore.collection('login').add({ ...login });
  }
}
