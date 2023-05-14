export class RedSocial{
    id?: Number;
    nombre: String;
    urlImagen: String;
    urlSitioWeb: String;

    constructor(nombre: String, urlImagen: String, urlSitioWeb:String){
        this.nombre = nombre;
        this.urlImagen = urlImagen;
        this.urlSitioWeb = urlSitioWeb;
    }
}