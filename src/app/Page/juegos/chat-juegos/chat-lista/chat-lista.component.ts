import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChatRoom } from 'src/Entidades/tp-juegos/chatRoom';
import { Usuario } from 'src/Entidades/tp-juegos/usuario';

@Component({
  selector: 'app-chat-lista',
  templateUrl: './chat-lista.component.html',
  styleUrls: ['./chat-lista.component.css']
})
export class ChatListaComponent implements OnInit {
  @Input() listaChat: ChatRoom[];
  @Output() onSelectedUsuario: EventEmitter<any>;
  constructor() {
    this.onSelectedUsuario = new EventEmitter<any>();
  }

  ngOnInit(): void {
  }

  enviarUsuarioSeleccionado(chat: ChatRoom) {
    //abrir chat
    this.onSelectedUsuario.emit({ existeChat: true, partner: chat });
  }

}
