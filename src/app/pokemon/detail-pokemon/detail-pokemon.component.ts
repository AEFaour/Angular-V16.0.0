import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: [
  ]
})
export class DetailPokemonComponent {
  pokemonList: Pokemon[];
  pokemon: Pokemon | undefined;

  constructor(private activateRoute: ActivatedRoute, private router: Router, private pokemonService : PokemonService) { }

  ngOnInit(): void {
    const pokemonId: string | null = this.activateRoute.snapshot.paramMap.get('id');
    if (pokemonId) {
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    }
  }
  goToPokementList() {
    this.router.navigate(['pokemons']);

  }

  goTeEditPokemon(pokemon : Pokemon) {
    this.router.navigate(['edit/pokemon', pokemon.id]);
  }

}
