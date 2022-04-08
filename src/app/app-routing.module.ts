import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Page/home/home.component';
import { JuegosComponent } from './Page/juegos/juegos.component';
import { TatetiComponent } from './Page/juegos/tateti/tateti.component';
import { LoginComponent } from './Page/login/login.component';
import { NotFoundComponent } from './Page/not-found/not-found.component';
import { PerfilComponent } from './Page/perfil/perfil.component';

const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch : 'full'},  //esto redirige a otro path definido segun el  path que le doy
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'perfil', component: PerfilComponent},
  { path: 'juego', component: JuegosComponent, 
      children: [
        { path: 'tateti', component: TatetiComponent },
        // { path: '**', component: NotFoundComponent },
      ]},
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
