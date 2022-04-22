import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Page/login/login.component';
import { MenuComponent } from './Page/menu/menu.component';
import { NotFoundComponent } from './Page/not-found/not-found.component';
import { JuegosComponent } from './Page/juegos/juegos.component';
import { TatetiComponent } from './Page/juegos/tateti/tateti.component';
import { HomeComponent } from './Page/home/home.component';
import { PerfilComponent } from './Page/perfil/perfil.component';
import { MemoTestComponent } from './Page/juegos/memo-test/memo-test.component';
import { PiedraPapelTijeraComponent } from './Page/juegos/piedra-papel-tijera/piedra-papel-tijera.component';
import { ResumenCarreraComponent } from './Page/perfil/resumen-carrera/resumen-carrera.component';
import { MenuPerfilComponent } from './Page/perfil/menu-perfil/menu-perfil.component';
import { ResumenHabilidadesComponent } from './Page/perfil/resumen-habilidades/resumen-habilidades.component';
import { ExperienciaLaboralComponent } from './Page/perfil/experiencia-laboral/experiencia-laboral.component';
import { JugadorComponent } from './modules/jugador/jugador.component';
import { MemoTestListadoComponent } from './Page/juegos/memo-test-listado/memo-test-listado.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    NotFoundComponent,
    JuegosComponent,
    TatetiComponent,
    HomeComponent,
    PerfilComponent,
    MemoTestComponent,
    PiedraPapelTijeraComponent,
    ResumenCarreraComponent,
    MenuPerfilComponent,
    ResumenHabilidadesComponent,
    ExperienciaLaboralComponent,
    JugadorComponent,
    MemoTestListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
