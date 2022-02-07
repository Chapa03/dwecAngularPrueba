import { Component } from '@angular/core';
//Importamos el fichero de configuración que hemos creado en models
import { Configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '<3';
  texto = "Hola bb :)";
  public descripcion = "";
  //Esta variable la utilizamos para mostrar u ocultar el componente videojuego
  public videojuegoVisible : boolean = true;
  //Mostrar u ocultar el componente zapatilla
  public zapatillaVisible : boolean = true;

//Creamos el contructor con un atributo config que obtiene la configuración
//del fichero que hemos creado en models
  public config: any;
  constructor() {
    this.config = Configuracion;
    this.title = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;

  }

  //Método para crear y destruir el componente videojuego
  visibilidadVideojuego(valor : boolean) {
    this.videojuegoVisible = valor;
  }

  //Método para crear y destruir el componente zapatilla
  visibilidadZapatilla(valor : boolean) {
    this.zapatillaVisible = valor;
  }
}
