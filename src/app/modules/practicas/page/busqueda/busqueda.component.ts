import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../entidad/pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  peliculasFromBusqueda: Pelicula[];
  peliculaFromEvent: Pelicula | undefined;
  constructor() { 
    var peli = new Pelicula();
    peli.nombre = "Zombie land";
    peli.fechaEstreno = "20/04/2020";
    peli.cantidadPublico = 15;
    peli.tipo = "Comedia";

    this.peliculasFromBusqueda = [ peli, peli];
  }

  ngOnInit(): void {
  }

  peliculaSelectedDetail(pelicula:Pelicula)
  {
    this.peliculaFromEvent = pelicula;
  }
}
