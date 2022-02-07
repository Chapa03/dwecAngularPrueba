import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
  selector: 'zapatilla',
  templateUrl: './zapatilla.component.html',
  styleUrls: ['./zapatilla.component.scss']
})
export class ZapatillaComponent implements OnInit {
  public textito = "Componente de zaptillas";
  //Array de zapatillas
  public zapatillas: Array<Zapatilla>;

  constructor() { 
    this.zapatillas = [
      new Zapatilla("Air Max", "Nike", "Blanco", 89, true),
      new Zapatilla("Reebok Classic", "Reebok", "Gris", 65, false),
      new Zapatilla("Jordan crater", "Nike", "Negro", 90, true)
    ]
  }

  //Se ejecuta al iniciar el componente
  ngOnInit(): void {
    console.log("Ejecutado ngOnInit().");
  }

  //Se ejecuta cada vez que se modifica algo de la aplicación
  ngDoCheck(): void {
      console.log("Ejecutado ngDoCheck().");
  }

  //Se ejecuta cada vez que se destruye el componente
  ngOnDestroy(): void {
      console.log("Ejecutado ngOnDestroy().");
  }

}
