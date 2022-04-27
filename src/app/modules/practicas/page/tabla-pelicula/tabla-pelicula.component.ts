import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../entidad/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {

  @Input() peliculasInPeliComponent: Pelicula[];
  @Output() onSelectedPelicula: EventEmitter<Pelicula>;
  constructor() { 
    this.onSelectedPelicula = new EventEmitter<Pelicula>();
  }

  ngOnInit(): void {
  }

  mostrarPelicula(pelicula:Pelicula)
  {
    this.onSelectedPelicula.emit(pelicula);
  }
}
