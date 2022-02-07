import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { DadoComponent } from './dado/dado.component';
import { ZapatillaComponent } from './zapatilla/zapatilla.component';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    DadoComponent,
    ZapatillaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
