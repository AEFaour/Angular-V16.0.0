import { Component, OnInit } from '@angular/core';
import { POKEMONS } from '../mock-pokemons-list';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent {
  pokemonList: Array<Pokemon> = POKEMONS;

  selectPokemon(pokemon: Pokemon) {
    console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);
  }
  
}
