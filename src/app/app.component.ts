import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemons-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  pokemonList: Array<Pokemon> = POKEMONS;


  ngOnInit(): void {
    console.table(this.pokemonList);
    //this.pokemonList.map(pokemon => this.selectPokemon(pokemon));
    //this.selectPokemon(this.pokemonList[3]);
  }

  selectPokemon(pokemon: Pokemon) {
    console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);
  }

  selectPokemonById(event : MouseEvent){
    const index : number = Number((event.target as HTMLInputElement).value); 
    console.log(`Vous avez cliqué sur le pokémon ${this.pokemonList[index].name}`);
  }

}
