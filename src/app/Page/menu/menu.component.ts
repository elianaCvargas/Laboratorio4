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
    if(localStorage.getItem('usuario') != null)
    {
       this.usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
    }
  }

  salir()
  {
      localStorage.removeItem("usuario");
  }

}
