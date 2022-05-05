import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { Registro } from 'src/Entidades/tp-juegos/registro';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
message:string;
  constructor(private firestore: AngularFirestore
    ,private auth: AngularFireAuth) { }

  guardar(registro: Registro)
  {
    return this.firestore.collection('registro').add({ ...registro });
  }

  // regitroGet(email: string): Observable<Documento<EstadisticaJugador>[]> {
  //   return this.firestore
  //   .collection<EstadisticaJugador>('EstadisticaJugador', (ref) =>
  //     ref.where('nombreJugador', '==', email)
  //   )
  //   .snapshotChanges()
  //   .pipe(
  //     map((results: DocumentChangeAction<EstadisticaJugador>[]) => {
  //       return results.map((result) => {
  //         var data = result.payload.doc.data();

  //         return {
  //           id: result.payload.doc.id,
  //           data: {
  //             nombreJugador: data.nombreJugador,
  //             nombreJuego: data.nombreJuego,
  //             cantGanados: data.cantGanados,
  //             cantPerdidos: data.cantPerdidos,
  //           } as EstadisticaJugador,
  //         };
  //     })
  //     })
  //   );
  // }


  registroGet(email:string) {
    return new Promise<any>((resolve)=> {
        this.firestore.collection('Registro', ref => ref
          .where('email', '==', email).orderBy('lastName').startAt(0).limit(3))
          .valueChanges().subscribe(users => resolve(users))
    })
    }


    registroPorAuth(email: string, pass: string): Promise<any> {
      return this.auth
        .createUserWithEmailAndPassword(email, pass)
        .then(res => {
          var result = res;
  
          return res;
        })
        .catch((err) => {
          switch (err.code) {
            case 'auth/email-already-in-use':
              this.message = 'Ya existe otro usuario con el mail ingresado';
              break;
            case 'auth/invalid-email':
              this.message = 'El formato debe ser: xyx@midominio.com';
  
              break;
            case 'auth/weak-password':
              this.message = 'El password debe contener al menos 6 letras';
              break;
            default:
              this.message = err;
              break;
          }
  
          return Promise.reject(this.message);
        });
    }


}

