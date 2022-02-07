export class Zapatilla {
    public nombre: String;
    public marca: String;
    public color: String;
    public precio: number;
    public stock: boolean;

    constructor (nombre: String, marca: String, color: String, precio: number, stock: boolean) {
        this.nombre = nombre;
        this.marca = marca;
        this.color = color;
        this.precio = precio;
        this.stock = stock;
    }
}