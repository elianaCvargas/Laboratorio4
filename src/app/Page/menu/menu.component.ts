import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/Entidades/tp-juegos/usuario';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  usuario: Usuario;
  constructor() { }

  ngOnInit(): void {
    // this.usuario = localStorage.getItem('usuario') != null ? localStorage.getItem('usuario') != null : '';
  }

}
