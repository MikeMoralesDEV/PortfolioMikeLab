import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Apartado} from "../../../shared/interfaces/apartado";
import {Router} from "@angular/router";

@Component({
  selector: 'app-apartado',
  templateUrl: './apartado.component.html',
  styleUrls: ['./apartado.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ApartadoComponent implements OnInit {

  @Input()
  public apartado: Apartado;

  public showCountOfApartados: number = 1;
  constructor(public router: Router) {

  }

  ngOnInit() : void{
  }


  async showMore() {
    for (let i = 1; i < this.apartado.contenido.length; i++) {
      this.showCountOfApartados++;
      await new Promise(f => setTimeout(f, 2000));
    }
  }
}
