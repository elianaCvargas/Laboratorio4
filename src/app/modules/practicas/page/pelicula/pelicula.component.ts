import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from '../../entidad/pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  @Input() peliculaFromParent: Pelicula;

  constructor() { 
  }

  ngOnInit(): void {
    
  }

  

}
