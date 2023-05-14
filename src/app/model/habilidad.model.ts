export class Habilidad{
    id?: Number;
    descripcion: String;
    nombre: String;
    urlImagen: String;

    constructor(descripcion: String, nombre: String, urlImagen: String){
        this.descripcion = descripcion;
        this.nombre = nombre;
        this.urlImagen = urlImagen;
    }
}