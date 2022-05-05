import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/Entidades/tp-juegos/usuario';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  usuario: Usuario | null;
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('usuario') != null)
    {
       this.usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
    }
  }

  salir()
  {
    setTimeout(() => {
    }, 3000);

    localStorage.removeItem("usuario");
    this.usuario = null;
  }

}
