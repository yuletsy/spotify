import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [ //TODO:DECLARACIONES, COMPONENTS,DIRECTIVAS, PIPES
    AppComponent,
  ],
  imports: [ //TODO: SOLO SE IMPORTAN OTROS MODULOS
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
