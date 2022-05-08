import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
// import { environment } from '../environments/environment';

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
import { FootComponent } from './Page/foot/foot.component';
import { MenuJuegosComponent } from './Page/juegos/menu-juegos/menu-juegos.component';
import { RegistroComponent } from './Page/registro/registro.component';
import { environment } from 'src/environments/environment';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ChatJuegosComponent } from './Page/juegos/chat-juegos/chat-juegos.component';
import { HomeJuegosComponent } from './Page/juegos/home-juegos/home-juegos.component';
import { AdivinaNumeroComponent } from './Page/juegos/adivina-numero/adivina-numero.component';
import { AhorcadoComponent } from './Page/juegos/ahorcado/ahorcado.component';
import { MayorMenorComponent } from './Page/juegos/mayor-menor/mayor-menor.component';

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
    MemoTestListadoComponent,
    FootComponent,
    MenuJuegosComponent,
    RegistroComponent,
    ChatJuegosComponent,
    HomeJuegosComponent,
    AdivinaNumeroComponent,
    AhorcadoComponent,
    MayorMenorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
