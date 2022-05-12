import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { UsuariosChatService } from 'src/app/servicios/usuarios-chat.service';
import { Usuario } from 'src/Entidades/tp-juegos/usuario';
import { ChatRoom } from 'src/Entidades/tp-juegos/chatRoom';
import { Mensaje } from 'src/Entidades/tp-juegos/mensaje';
import { ChatJuegosComponent } from '../chat-juegos.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  provisorio: Usuario = new Usuario();
  mensaje: string = '';
  @Input() usuarioReceptorSelected: Usuario;
  @Input() existeChat: boolean;
  @Output() onChatNuevoGenerado: EventEmitter<boolean> = new EventEmitter<boolean>();

  usuarioLogged: Usuario;
  mensajeEnviado: string;

  mensajesEnviados: Mensaje[];
  mensajesRecibidos: Mensaje[];

  constructor(private usuarioService: UsuarioService, private usuarioChatService: UsuariosChatService) { }

  ngOnInit(): void {
    this.usuarioLogged = JSON.parse(localStorage.getItem('usuario') || '{}');
    // this.usuarioReceptorSelected.email = 'Fabi@martino.com';
    this.usuarioChatService.getAllMensajesEnviados(this.usuarioLogged.email, this.usuarioReceptorSelected.email)
      .then(mensajesEnviados => {
        this.mensajesEnviados = mensajesEnviados;
      }).catch(
        error => console.log(error)
      );

    this.usuarioChatService.getAllMensajesRecibidos(this.usuarioLogged.email, this.usuarioReceptorSelected.email)
      .then(mensajesRecibidos => {
        this.mensajesRecibidos = mensajesRecibidos;
      }).catch(
        error => console.log(error)
      );
  }

  enviarMensaje() {
    var chat = new ChatRoom();
    chat.partner = this.usuarioReceptorSelected;
    chat.usuario = this.usuarioLogged;

    if (this.existeChat) {
      this.guardarMensaje(chat);
    } else {
      this.usuarioChatService.crearChat(chat)
        .then(data => {
          this.guardarMensaje(chat);

        })
        .catch(error => { console.log(); });
    }
  }

  private guardarMensaje(chat: ChatRoom) {
    var mensajeChat = new Mensaje();
    var fecha = new Date().toLocaleString();
    mensajeChat.partner = chat.partner.email;
    mensajeChat.usuario = chat.usuario.email;
    mensajeChat.mensajeEnvio = this.mensaje;
    mensajeChat.fecha = fecha;
    this.usuarioChatService.guardarMensajeChat(mensajeChat)
      .then(
        (data) => {
          console.log(data)
          this.mensajeEnviado = this.mensaje;
          if (!this.existeChat) {
            this.refrescarListaUsuarioRecientes()
          }
        }
      )
      .catch(error => console.error(error));
  }

  refrescarListaUsuarioRecientes() {
    this.onChatNuevoGenerado.emit(true);
  }

}
