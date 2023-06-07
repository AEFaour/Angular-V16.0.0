import { Injectable } from '@angular/core';
import { Pokemon } from '././pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, tap, of } from 'rxjs';

@Injectable()
export class PokemonService {

  constructor(private http: HttpClient) {

  }

  getPokemonList(): Observable<Array<Pokemon>> {
    return this.http.get<Array<Pokemon>>('api/pokemons').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    )
  }

  getPokemonById(pokemonId: number): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon | undefined>(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    )
  }

  updatePokemon(pokemon: Pokemon): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    }
    return this.http.put('api/pokemons', pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    )
  }

  deletePokemonById(pokemonId: number): Observable<null> {
    return this.http.delete(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    )
  }

  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    }
    return this.http.post<Pokemon>('api/pokemons', pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    )
  }

  searchPokemonList(term: string): Observable<Array<Pokemon>> {
    if(term.length <= 2) {
      return of([]);
    }
    return this.http.get<Array<Pokemon>>(`api/pokemons/?name=${term}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    )
  }
  private log(response: any) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
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
