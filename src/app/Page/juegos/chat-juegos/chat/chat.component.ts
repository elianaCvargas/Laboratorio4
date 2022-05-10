import { Component, Input, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { UsuariosChatService } from 'src/app/servicios/usuarios-chat.service';
import { Usuario } from 'src/Entidades/tp-juegos/usuario';
import { ChatRoom } from 'src/Entidades/tp-juegos/chatRoom';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  provisorio: Usuario = new Usuario();
  mensaje: string = '';
  @Input() usuarioReceptorSelected: Usuario;
  constructor(private usuarioService: UsuarioService, private usuarioChatService: UsuariosChatService) { }
  //tiene que entrar por input

  ngOnInit(): void {
    // this.usuarioService.usuarioGet(this.usuarioReceptorSelected)
    //   .then(data => {
    //     this.receptor = data;
    //   });


  }

  enviarMensaje() {
    var chat = new ChatRoom();
    chat.fecha = new Date().toLocaleString();
    chat.mensajeEnvio = this.mensaje;
    chat.usuarioReceiver = this.provisorio;
    chat.usuarioSender = this.provisorio;
    this.usuarioChatService.guardarMensajeChat(chat)
      .then(data => {

      })
      .catch(error => { console.log() });
  }

}
