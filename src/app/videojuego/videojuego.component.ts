//################# CONTROLADOR DE VIDEOJUEGO #################

import { Component, DoCheck, OnDestroy, OnInit } from "@angular/core";

//JSON
@Component ({
    selector: "videojuego",
    //no se debe crear la vista en el controlador:
    //Las comillas deben ser invertidas para el código HTML
    templateUrl: "./videojuego.component.html"
})

//El nombre de la clase con camel case
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
    //Podemos incliur las varibles que necesitemos para esta clase
    //Las nombraremos con {{nombreVariable}}
    public titulo: string;
    public listado: string;

    constructor() {
        this.titulo = "Lista de videojuegos";
        this.listado = "Me gustan estos juegos hahahahhajajahjajaj xd";    
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

    cambiarTitulo() {
        this.titulo = "Título cambiadito por cambiarTitulo() - videojuego.components";
    }
}