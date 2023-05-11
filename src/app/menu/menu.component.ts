import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent  implements AfterViewInit{
  @ViewChild('menu') menu: ElementRef;

  constructor(private elementRef:ElementRef) {
  }

  ngAfterViewInit(){
    this.menu.nativeElement.querySelector('.tabbar--button').addEventListener("click", this.onClick.bind(this));
    let t = this.menu.nativeElement.querySelectorAll('mat-icon');
    for(let i = 0; i < t.length ; i++){
      t[i].addEventListener("click", this.onClick.bind(this));
    }
  }

  onClick(){
    console.log(this.menu.nativeElement.innerHTML);
    if (this.menu.nativeElement.classList.contains("show")) {
      this.menu.nativeElement.classList.remove("show");
    } else {
      this.menu.nativeElement.classList.add("show");
    }
  }
}
