import {Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Apartado} from "../../../shared/interfaces/apartado";
import {Router} from "@angular/router";
import {Proyecto} from "../../../shared/interfaces/proyecto";
import {MatDialog} from "@angular/material/dialog";
import {DialogoproyectoComponent} from "./dialogoproyecto/dialogoproyecto.component";

@Component({
  selector: 'app-apartado',
  templateUrl: './apartado.component.html',
  styleUrls: ['./apartado.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ApartadoComponent implements OnInit {

  @ViewChild('sliderFormacion') slider: ElementRef;

  @Input()
  public apartado: Apartado;

  public listaIconos: Array<Array<string>>;
  public listaImagenes: Array<string>;
  public showCountOfApartados: number = 1;

  public proyectos: Array<Proyecto>;

  public proyectosPagina: Array<Proyecto>;

  public actualSlider: number = 0;
  public paginaActual: number = 1;
  public cantidadPaginas: number = 0;

  //Cuando implemente los media queries, este valor dependerá del tamaño de la resolución
  public modularPaginas: number = 3;
  constructor(public router: Router, public dialog: MatDialog) {

    //Lista de iconos de la formación
    this.listaIconos = [
      [
      "school",
      "school",
      "devices",
      "logo_dev",
      "style",
      "view_compact_alt"
      ],
      [
        "developer_mode",
        "science",
        "school"
      ]
    ]

    //Lista de imagenes de las tecnologías
    this.listaImagenes = [
      "../assets/laravel.svg",
      "../assets/spring.svg",
      "../assets/docker.svg",
      "../assets/angular.svg",
      "../assets/ionic.svg",
      "../assets/sass.svg",
      "../assets/gulp.svg",
      "../assets/cisco.svg",
      "../assets/spark.svg",
      "../assets/opencv.svg",
      "../assets/flutter.svg",
      "../assets/python.svg",
      "../assets/java.svg",
      "../assets/cplus.svg"
    ]

    //Lista de proyectos
    this.proyectos = [
      {
        titulo: "Configurador de móviles",
        contenido: "Aplicación nativa de escritorio en Java, JavaFX y MySQL para configurar y comprar móviles modulares del proyecto ARA de Google que fue cancelado en 2016. Fue desarrollado durante mi etapa como estudiante junto a uno de mis compañeros.",
        ruta: "../assets/araproject.png",
        estado: "Terminado"
      },
      {
        titulo: "Portfolio MikeLab",
        contenido: "Es la página que usted se encuentra visitando. Está pensada como página principal de mi dominio y Hub de mis aplicaciones y proyectos. Un complemento perfecto para mi perfil de LinkedIn y la ventana funcional de mi GitHub. Mi pequeño rincón para mostrar quien soy. Está desarrollada con Angular 15.",
        ruta: "../assets/mikelab.png",
        estado: "Terminado"
      },
      {
        titulo: "Keep It!",
        contenido: "Un proyecto ambicioso y multiplataforma desarrollado con Spring Boot Web y Thymeleaf. El objetivo es tener un control de gastos totalmente personalizable y modular que se adapte a la mayoría de situaciones: huchas, fondos de inversión, gastos puntuales, necesarios, no necesarios, etc. Será lanzado próximamente para su uso bajo invitación.",
        ruta: "../assets/keepit.png",
        estado: "En desarrollo"
      },
      {
        titulo: "Follow List Online+Physical",
        contenido: "Hay muchas aplicaciones para seguir series, películas, libros, animes o mangas y saber por dónde vas en esta odísea de plataformas que vivimos a día de hoy. Sin embargo, ninguna contempla que también tenga estas colecciones de manera física, lo cual pretendo solucionar con esta aplicación la cual aún no tengo decidido qué tecnologías usar.",
        ruta: "../assets/default.png",
        estado: "En fase conceptual"
      }
    ]

    this.cantidadPaginas = this.proyectos.length%this.modularPaginas;
    this.proyectosPagina = this.proyectos.slice(this.paginaActual-1, this.modularPaginas);

  }

  ngOnInit() : void{
    setInterval(() => this.change('next'), 6000) //Mover automáticamente el slider.
  }

  //Función para mostrar el contenido de general poco a poco.
  async showMore() {
    for (let i = 1; i < this.apartado.contenido.length; i++) {
      this.showCountOfApartados++;
      await new Promise(f => setTimeout(f, 2000));
    }
  }

  //Función para que el slider se pueda mover tanto con los botones como automáticamente cada 2s.
  change(cambio: String){
    if(cambio == 'next'){

      if(this.actualSlider == this.listaImagenes.length-1){
        this.actualSlider = 0;
      }else{
        this.actualSlider++;
      }

    }else if(cambio == 'back'){

      if(this.actualSlider == 0){
        this.actualSlider = this.listaImagenes.length-1;
      }else{
        this.actualSlider--;
      }

    }

  }

  siguientePagina(){
    this.paginaActual = (this.paginaActual + 1)%this.modularPaginas;
    if(this.paginaActual == 0){ this.paginaActual = 1; }
    this.proyectosPagina = this.proyectos.slice((this.paginaActual-1)*this.modularPaginas, this.modularPaginas*this.paginaActual);

  }

  anteriorPagina(){
    this.paginaActual = (this.paginaActual - 1)%this.modularPaginas;
    if(this.paginaActual == 0){ this.paginaActual = this.modularPaginas-1; }
    this.proyectosPagina = this.proyectos.slice((this.paginaActual-1)*this.modularPaginas, this.modularPaginas*this.paginaActual);
  }

  abrirProyecto(titulo: string) {
    const dialogoProyecto = this.dialog.open(DialogoproyectoComponent, {
      data: this.proyectos.find(item => item.titulo === titulo),
      backdropClass: 'backdropBackground'
    });
  }
}
