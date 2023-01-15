import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { PokemonsService } from '../services/pokemons.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss'],
})
export class PokemonsComponent {
  pokemons: any;
  subscriptions: Subscription[] = [];

  constructor(public pokemonsService: PokemonsService) {}

  ngOnInit() {
    this.pokemonsService.getPokemons().subscribe((data) => {
      console.log('data.results', data.results);
      this.pokemons = data;
      data.results.map((item: any) =>
        this.pokemonsService.getPokemon(item.name)
      );
    });
  }
}
