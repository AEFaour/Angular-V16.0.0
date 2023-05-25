import { Component, OnInit } from '@angular/core';
import {POKEMONS} from './mock-pokemons-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  template: `<h1>List de Pokémons</h1>`,
})
export class AppComponent implements OnInit {
  pokemonList= POKEMONS;


  ngOnInit(): void {
    console.table(this.pokemonList);
    this.pokemonList.map(pokemon => this.selectPokemon(pokemon));
    this.selectPokemon(this.pokemonList[3]);
  }

  selectPokemon(pokemon: Pokemon){
    console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);
  }
  
}
