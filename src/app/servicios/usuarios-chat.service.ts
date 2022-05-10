import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ChatRoom } from 'src/Entidades/tp-juegos/chatRoom';

@Injectable({
  providedIn: 'root'
})
export class UsuariosChatService {

  message: string;
  constructor(private firestore: AngularFirestore
  ) { }

  guardarMensajeChat(usuarioChat: ChatRoom) {
    return this.firestore.collection('usuario-chat').add({ ...usuarioChat });
  }
}
