import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ChatRoom } from 'src/Entidades/tp-juegos/chatRoom';
import { Mensaje } from 'src/Entidades/tp-juegos/mensaje';

@Injectable({
  providedIn: 'root'
})
export class UsuariosChatService {

  message: string;
  constructor(private firestore: AngularFirestore
  ) { }

  //CHAT-ROOM
  crearChat(chatRoom: ChatRoom) {
    return this.firestore.collection('chat-room').add({ ...chatRoom });
  }


  ChatGetAll(email: string) {
    return new Promise<any>((resolve) => {
      this.firestore.collection('chat-room', ref => ref
        // .where('email', '==', email).orderBy('fecha').startAt(0).limit(3)
      )
        .valueChanges().subscribe(chat => resolve(chat))
    })
  }

  ChatGet(email: string) {
    return new Promise<any>((resolve) => {
      this.firestore.collection('chat-room', ref => ref
        .where('partner.email', '==', email)
      )
        .valueChanges().subscribe(chat => resolve(chat))
    })
  }
  //END CHAT-ROOM

  //MENSAJE
  guardarMensajeChat(mensaje: Mensaje) {
    return this.firestore.collection('mensaje-chat').add({ ...mensaje });
  }

  getAllMensajesEnviados(sender: string, receiver: string) {
    return new Promise<any>((resolve) => {
      this.firestore.collection('mensaje-chat', ref => ref
        .where('usuario', '==', sender)
        .where('partner', '==', receiver)
      )
        .valueChanges().subscribe(mensajes => resolve(mensajes))
    })
  }

  getAllMensajesRecibidos(sender: string, receiver: string) {
    return new Promise<any>((resolve) => {
      this.firestore.collection('mensaje-chat', ref => ref
        .where('usuario', '==', receiver)
        .where('partner', '==', sender)
      )
        .valueChanges().subscribe(mensajes => resolve(mensajes))
    })
  }



}
