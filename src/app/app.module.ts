import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/universal-components/nav-bar/nav-bar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

//material ui imports//
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,

    //Material UI 
    MatToolbarModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
