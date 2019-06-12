import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent, headerComponents } from './components/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomePageComponent,
    headerComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
