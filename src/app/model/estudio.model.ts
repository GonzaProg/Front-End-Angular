export class Estudio{
    id?: Number;
    descripcion: String;
    fin: String;
    inicio: String;
    institucion: String;
    titulo: String;
    urlTitulo: String;

    constructor(descripcion: String, fin: String, inicio: String, institucion: String, titulo: String, urlTitulo: String){
        this.descripcion = descripcion;
        this.fin = fin;
        this.inicio = inicio;
        this.institucion = institucion;
        this.titulo = titulo;
        this.urlTitulo = urlTitulo;
    }
}