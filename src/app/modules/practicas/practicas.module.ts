import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticasRoutingModule } from './practicas-routing.module';
import { PeliculaComponent } from './page/pelicula/pelicula.component';
import { TablaPeliculaComponent } from './page/tabla-pelicula/tabla-pelicula.component';
import { ListaPeliculaComponent } from './page/lista-pelicula/lista-pelicula.component';
import { BusquedaComponent } from './page/busqueda/busqueda.component';



@NgModule({
  declarations: [
    PeliculaComponent,
    TablaPeliculaComponent,
    ListaPeliculaComponent,
    BusquedaComponent
  ],
  imports: [
    CommonModule,
    PracticasRoutingModule
  ]
})
export class PracticasModule { }
