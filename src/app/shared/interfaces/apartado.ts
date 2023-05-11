export enum secciones {
  general = "general",
  experiencia = "experiencia",
  formacion = "formacion",
  hobby="hobby",


}

export interface Apartado {
  contenido: Array<string>;
  seccion: secciones;

  ruta: string;

  titulo: string;
}
