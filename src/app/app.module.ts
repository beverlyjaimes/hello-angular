import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Material section
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
