import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryMenuComponent } from './components/country-menu/country-menu.component';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    CountryMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
