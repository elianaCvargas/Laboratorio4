import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculaComponent } from './page/pelicula/pelicula.component';

const routes: Routes = [
  { path: 'pelicula', component: PeliculaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticasRoutingModule { }
