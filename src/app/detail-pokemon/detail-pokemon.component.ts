import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { POKEMONS } from '../mock-pokemons-list';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: [
  ]
})
export class DetailPokemonComponent {
  pokemonList : Pokemon[];
  pokemon: Pokemon|undefined;

  constructor(private activateRoute: ActivatedRoute){}

  ngOnInit():void {
    this.pokemonList = POKEMONS;
    const pokemonId: string | null = this.activateRoute.snapshot.paramMap.get('id');
    if(pokemonId){
      this.pokemon = this.pokemonList.find(pokemon => pokemon.id == +pokemonId );
    } 
  }

  


}
