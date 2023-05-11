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


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PortfolioComponent,
    ApartadoComponent,
    Error404Component
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        //Imports de Angular Material
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {



}
