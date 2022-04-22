import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticasRoutingModule } from './practicas-routing.module';
import { PeliculaComponent } from './pelicula/pelicula.component';


@NgModule({
  declarations: [
    PeliculaComponent
  ],
  imports: [
    CommonModule,
    PracticasRoutingModule
  ]
})
export class PracticasModule { }
