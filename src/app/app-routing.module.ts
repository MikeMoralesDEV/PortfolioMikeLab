import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PortfolioComponent} from "./views/portfolio/portfolio.component";
import {Error404Component} from "./views/error404/error404.component";
import {ContactoComponent} from "./views/contacto/contacto.component";

const routes: Routes = [
  { path: "", component: PortfolioComponent },
  { path: "formacion", component: PortfolioComponent},
  { path: "experiencia", component: PortfolioComponent },
  { path: "contacto", component: ContactoComponent},
  { path: "**", component: Error404Component }
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
