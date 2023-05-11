import {Component, ViewEncapsulation} from '@angular/core';
import {Apartado, secciones} from "../../shared/interfaces/apartado";
import {Router} from "@angular/router";

declare var anime: any;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PortfolioComponent{

  public listadoApartados: Apartado[];


  constructor(public router: Router) {

    let parrafosGeneral = [
       "¡Bienvenido a mi portfolio profesional! Soy un ingeniero informático del '92, con una sólida experiencia de 5 años como <span class=\"highlight\">profesor de Formación Profesional</span> en desarrollo de aplicaciones, y también soy un ávido desarrollador.",
       "Soy un \"<span class=\"highlight\">Firefighter tecnológico</span>\" por naturaleza, lo que significa que disfruto encontrando soluciones creativas y eficientes a los problemas más complejos en el ámbito de la informática. Creo firmemente en la importancia de mantener una <span class=\"highlight\">actitud humilde y simpática</span> en mi trabajo, lo que me permite conectarme mejor con las personas y lograr una comunicación efectiva.",
       "Además de mi experiencia laboral, también he invertido tiempo en mi formación, ya que creo que el <span class=\"highlight\">aprendizaje continuo</span> es clave para mantenerse actualizado en un campo tan cambiante como la informática. He completado cursos de especialización de muchos ámbitos distintos y tengo experiencia en el desarrollo de aplicaciones para diferentes plataformas. No obstante, mis especialidades son <span class=\"highlight\">Big Data y Machine Learning</span>.",
       "Cuando no estoy inmerso en el mundo de la informática, me encanta leer, el cine, los videojuegos, la impresión 3D y otros hobbies que me ayudan a mantener un <span class=\"highlight\">equilibrio en mi vida personal y profesional</span>.",
       "Estoy entusiasmado por compartir mi experiencia y habilidades con otros profesionales y organizaciones que buscan conocer a un experto en informática comprometido y motivado.",
        "<span class=\"highlight centeringHighlight\">¡Gracias por visitar mi portfolio!</span>"
    ];

    let parrafosEmptyAux = ["hel", "lo"];

    this.listadoApartados = [

      {
        contenido: parrafosGeneral,
        seccion: secciones.general,
        ruta: "/",
        titulo: "Un poco sobre mí"
      },
      {
        contenido : parrafosEmptyAux,
        seccion: secciones.experiencia,
        ruta: "/experiencia",
        titulo: "Mis experiencias"

      },
      {
        contenido: parrafosEmptyAux,
        seccion: secciones.formacion,
        ruta: "/formacion",
        titulo: "Formación y aptitudes"

      }

    ];



  }


}
