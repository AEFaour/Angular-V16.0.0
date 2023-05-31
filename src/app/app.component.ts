import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemons-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  pokemonList: Array<Pokemon> = POKEMONS;
  selectedPokemon: Pokemon|undefined;


  ngOnInit(): void {
    console.table(this.pokemonList);
    //this.pokemonList.map(pokemon => this.selectPokemon(pokemon));
    //this.selectPokemon(this.pokemonList[3]);
  }

  selectPokemon(pokemon: Pokemon) {
    console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);
  }

  selectPokemonById(event: MouseEvent) {
    //const index : number = Number((event.target as HTMLInputElement).value); 
    const index: number = +(event.target as HTMLInputElement).value;
    console.log(`Vous avez cliqué sur le pokémon ${this.pokemonList[index].name}`);
  }

  selectPokemonFromInput(pokemonId: string) {
    const pokemon: Pokemon | undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId+1);
    this.selectedPokemon = pokemon;
   /* if (pokemon) {
      console.log(`Vous avez demandé le pokémon ${pokemon.name}`);
      this.selectedPokemon = pokemon;
    } else {
      console.log(`Vous avez demandé un pokémon inexist`);
      this.selectedPokemon = pokemon;
    }*/
  }

}
