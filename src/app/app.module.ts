import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { ApartadoComponent } from './views/portfolio/apartado/apartado.component';
import { AppRoutingModule } from './app-routing.module';
import { Error404Component } from './views/error404/error404.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatExpansionModule} from "@angular/material/expansion";
import { DialogoproyectoComponent } from './views/portfolio/apartado/dialogoproyecto/dialogoproyecto.component';
import {MatDialogModule} from "@angular/material/dialog";
import { ContactoComponent } from './views/contacto/contacto.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PortfolioComponent,
    ApartadoComponent,
    Error404Component,
    DialogoproyectoComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //Imports de Angular Material
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatTooltipModule,
    MatExpansionModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {



}
