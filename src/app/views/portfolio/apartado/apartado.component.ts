import {Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Apartado} from "../../../shared/interfaces/apartado";
import {Router} from "@angular/router";

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

  public listaIconos: Array<string>;
  public listaImagenes: Array<string>;
  public showCountOfApartados: number = 1;

  public actualSlider: number = 0;
  constructor(public router: Router) {

    this.listaIconos = [
      "school",
      "school",
      "devices",
      "logo_dev",
      "style",
      "view_compact_alt"
    ]

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
  }

  ngOnInit() : void{
    setInterval(() => this.change('next'), 6000)
  }


  async showMore() {
    for (let i = 1; i < this.apartado.contenido.length; i++) {
      this.showCountOfApartados++;
      await new Promise(f => setTimeout(f, 2000));
    }
  }

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

}
