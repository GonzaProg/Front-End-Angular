export class Persona{
    id?: Number;
    nombre: String;
    imagen: String;
    presentacion: String;
    email: String;

    constructor(nombre: String, imagen: String, presentacion: String, email: String){
        this.nombre = nombre;
        this.imagen = imagen;
        this.presentacion = presentacion;
        this.email = email;
    }
}