import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-juegos',
  templateUrl: './home-juegos.component.html',
  styleUrls: ['./home-juegos.component.css']
})
export class HomeJuegosComponent implements OnInit {

  public userIsLogged: boolean;
  constructor(private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit() {
    this.userIsLogged = localStorage.getItem("usuario") != undefined ? true : false;
    console.log(this.userIsLogged);
  }

  irAJuego(tipo: string) {
    switch (tipo) {
      case 'Adivina':
        this.router.navigate(['/Juegos/Adivina']);
        break;
      case 'Agilidad':
        this.router.navigate(['/Juegos/Agilidad']);
        break;
      case 'AdivinaMasListado':
        this.router.navigate(['/Juegos/AdivinaMasListado']);
        break;
      case 'AgilidadaMasListado':
        this.router.navigate(['/Juegos/AgilidadaMasListado']);
        break;
    }
  }

}
