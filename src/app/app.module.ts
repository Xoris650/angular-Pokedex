import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeCardComponent } from './components/poke-card/poke-card.component';
import { HomeComponent } from './pages/home/home.component';
import { PokePageComponent } from './pages/poke-page/poke-page.component';
import { PokeInfoComponent } from './components/poke-info/poke-info.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeCardComponent,
    HomeComponent,
    PokePageComponent,
    PokeInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
