import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Page/home/home.component';
import { AhorcadoComponent } from './Page/juegos/ahorcado/ahorcado.component';
import { HomeJuegosComponent } from './Page/juegos/home-juegos/home-juegos.component';
import { JuegosComponent } from './Page/juegos/juegos.component';
import { MayorMenorComponent } from './Page/juegos/mayor-menor/mayor-menor.component';
import { MemoTestComponent } from './Page/juegos/memo-test/memo-test.component';
import { PiedraPapelTijeraComponent } from './Page/juegos/piedra-papel-tijera/piedra-papel-tijera.component';
import { TatetiComponent } from './Page/juegos/tateti/tateti.component';
import { LoginComponent } from './Page/login/login.component';
import { NotFoundComponent } from './Page/not-found/not-found.component';
import { ExperienciaLaboralComponent } from './Page/perfil/experiencia-laboral/experiencia-laboral.component';
import { PerfilComponent } from './Page/perfil/perfil.component';
import { ResumenCarreraComponent } from './Page/perfil/resumen-carrera/resumen-carrera.component';
import { ResumenHabilidadesComponent } from './Page/perfil/resumen-habilidades/resumen-habilidades.component';
import { RegistroComponent } from './Page/registro/registro.component';


const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch : 'full'},  //esto redirige a otro path definido segun el  path que le doy
  { path: 'inicio', loadChildren: () => import('./modules/inicio/inicio.module').then(m => m.InicioModule) },
  { path: 'practicas', loadChildren: () => import('./modules/practicas/practicas.module').then(m => m.PracticasModule) },

  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  {
    path: 'perfil', component: PerfilComponent,
    children: [
      { path: '', component: ResumenCarreraComponent },
      { path: 'resumen-carrera', component: ResumenCarreraComponent },
      { path: 'resumen-habilidades', component: ResumenHabilidadesComponent },
      { path: 'experiencia-laboral', component: ExperienciaLaboralComponent },
      //  { path: 'resumen-carrera', redirectTo: 'resumen-carrera', pathMatch : 'full' },
    ]
  },
  {
    path: 'juego', component: JuegosComponent,
    children: [
      { path: '', component: HomeJuegosComponent },
      { path: 'ahorcado', component: AhorcadoComponent },
      { path: 'mayor-menor', component: MayorMenorComponent },

      { path: 'tateti', component: TatetiComponent },
      { path: 'piedra-papel-tijera', component: PiedraPapelTijeraComponent },
      { path: 'memo-test', component: MemoTestComponent },
      // { path: '**', component: NotFoundComponent },
    ]
  },
  // {
  //   path: 'juego', component: JuegosComponent,
  //   children: [
  //     { path: 'tateti', component: TatetiComponent },
  //     { path: 'piedra-papel-tijera', component: PiedraPapelTijeraComponent },
  //     { path: 'memo-test', component: MemoTestComponent },
  //     // { path: '**', component: NotFoundComponent },
  //   ]
  // },
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
