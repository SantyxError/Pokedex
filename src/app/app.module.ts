import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonService } from './services/pokemon.service';
import { PokemonsService } from './services/pokemons.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, PokemonsComponent, PokemonComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [PokemonService, PokemonsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
