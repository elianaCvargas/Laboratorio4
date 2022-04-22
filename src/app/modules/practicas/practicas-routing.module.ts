import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './page/busqueda/busqueda.component';
import { PeliculaComponent } from './page/pelicula/pelicula.component';

const routes: Routes = [
  { path: 'busqueda', component: BusquedaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticasRoutingModule { }
