import { Injectable } from '@angular/core';
import { POKEMONS } from '././mock-pokemons-list';
import { Pokemon } from '././pokemon';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  getPokemonList(): Array<Pokemon> {
    return POKEMONS;
  }

  getPokemonById(pokemonId: number): Pokemon | undefined {
    return POKEMONS.find(element => element.id == pokemonId);
  }

  getPokemonTypelist(): string[] {
    return [
      "Combat",
      "Eau",
      "Electrik",
      "Fée",
      "Feu",
      "Insecte",
      "Normal",
      "Plante",
      "Poison",
      "Psy",
      "Vol"
    ];
  }

}
