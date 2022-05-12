import { Component, OnInit } from '@angular/core';

import { UsuarioService } from 'src/app/servicios/usuario.service';
import { UsuariosChatService } from 'src/app/servicios/usuarios-chat.service';
import { ChatRoom } from 'src/Entidades/tp-juegos/chatRoom';
import { Usuario } from 'src/Entidades/tp-juegos/usuario';

@Component({
  selector: 'app-chat-juegos',
  templateUrl: './chat-juegos.component.html',
  styleUrls: ['./chat-juegos.component.css']
})
export class ChatJuegosComponent implements OnInit {
  listaJugadores: Usuario[] = [];
  jugadorSeleccionado: string;
  userIsLogged: boolean;
  chatsRecientes: ChatRoom[];
  todosLosChats: ChatRoom[];
  existeChatAbierto: boolean = false;

  // mensaje-chat
  receptor: Usuario = new Usuario();
  mensajesUsuario: ChatRoom;
  usuarioLogged: Usuario;
  chat: ChatRoom;

  constructor(private usuarioServicio: UsuarioService, private chatService: UsuariosChatService) {
  }

  ngOnInit(): void {
    this.userIsLogged = localStorage.getItem("usuario") != undefined ? true : false;
    this.usuarioLogged = JSON.parse(localStorage.getItem('usuario') || '{}');

    // Busco Usuarios
    this.usuarioServicio.usuariosGetAll().then(usuarios => {
      this.listaJugadores = usuarios.sort(this.compare);
      this.listaJugadores = this.listaJugadores.filter((a) => a.email != this.usuarioLogged.email);
    }).catch(error => { console.log(error) });

    // Busco Chats existentes
    this.buscarChat();
  }

  abrirChat() {
    var existeChat = this.todosLosChats.find(c => c.partner.email == this.jugadorSeleccionado);

    if (!existeChat) {
      this.usuarioServicio.usuarioGet(this.jugadorSeleccionado)
        .then(data => {
          this.receptor = data[0];
          this.existeChatAbierto = false;
        });
    } else {
      this.receptor = existeChat.partner;
      this.existeChatAbierto = true;
    }
  }

  buscarChat() {
    if (this.receptor != null) {
      this.chatService.ChatGetAll(this.usuarioLogged.email).then(data => {
        this.todosLosChats = data;
        this.todosLosChats = data.sort(this.compareByDate);
        this.chatsRecientes = this.todosLosChats;
        if (this.todosLosChats.length >= 7) {
          this.chatsRecientes = this.todosLosChats.splice(7);
        }
      }).catch(error => {
        console.log(error);
      });
    }
  }

  actualizarListaYExisteChat() {
    this.buscarChat();
    this.existeChatAbierto = true;
  }

  usuarioSelected(chat: any) {

    var partner = new Usuario();
    partner.apellido = chat.partner.partner.email;
    partner.email = chat.partner.partner.email;
    partner.nombre = chat.partner.partner.nombre;
    this.receptor = partner;
    this.existeChatAbierto = chat.existeChat;
  }

  private compare(jugador1: Usuario, jugador2: Usuario) {

    if (jugador1.email.toLocaleLowerCase() < jugador2.email.toLocaleLowerCase()
    ) {
      return -1;
    }
    if (jugador1.email.toLocaleLowerCase() > jugador2.email.toLocaleLowerCase()
    ) {
      return 1;
    }
    return 0;
  }

  private compareByDate(fecha1: string, fecha2: string) {
    var fechaDate1 = new Date(Date.parse(fecha1));
    var fechaDate2 = new Date(Date.parse(fecha2));

    if (fechaDate1 < fechaDate2
    ) {
      return -1;
    }
    if (fechaDate1 > fechaDate2
    ) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }




}


