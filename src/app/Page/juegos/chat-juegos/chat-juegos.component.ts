import { Component, OnInit } from '@angular/core';

import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Usuario } from 'src/Entidades/tp-juegos/usuario';

@Component({
  selector: 'app-chat-juegos',
  templateUrl: './chat-juegos.component.html',
  styleUrls: ['./chat-juegos.component.css']
})
export class ChatJuegosComponent implements OnInit {
  listaJugadores: Usuario[] = [];
  jugadorSeleccionado: string;
  receptor: Usuario = new Usuario();
  constructor(private usuarioServicio: UsuarioService) {

  }

  ngOnInit(): void {
    this.usuarioServicio.usuariosGetAll().then(usuarios => {
      this.listaJugadores = usuarios.sort(this.compare);
    }).catch(error => { console.log(error) });
  }

  compare(jugador1: Usuario, jugador2: Usuario) {

    if (jugador1.email.toLocaleLowerCase() < jugador2.email.toLocaleLowerCase()
    ) {
      return -1;
    }
    if (jugador1.email.toLocaleLowerCase() > jugador2.email.toLocaleLowerCase()
    ) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }

  abrirChat() {
    this.usuarioServicio.usuarioGet(this.jugadorSeleccionado)
      .then(data => {
        this.receptor = data;
      });
  }

}


