export class Proyecto{
    id?: Number;
    descripcion: String;
    urlProyecto: String;
    titulo: String;

    constructor(descripcion: String, urlProyecto: String, titulo: String){
        this.descripcion = descripcion;
        this.urlProyecto = urlProyecto;
        this.titulo = titulo;
    }
}