import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { BorderCardDirective } from './border-card.directive';
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonFormComponent } from './edit-pokemon-form/edit-pokemon-form.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { LoaderComponent } from './loader/loader.component';
import { authGuard } from '../auth.guard';

const pokemonRoutes: Routes = [
  {path: 'edit/pokemon/:id', component: EditPokemonFormComponent, canActivate: [authGuard]},
  {path: 'pokemon/add', component: AddPokemonComponent, canActivate: [authGuard]},
  {path: 'pokemons', component: ListPokemonComponent, canActivate: [authGuard]},
  {path: 'pokemon/:id', component: DetailPokemonComponent, canActivate: [authGuard]}
 
];

@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    EditPokemonFormComponent,
    AddPokemonComponent,
    SearchPokemonComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(pokemonRoutes)
  ],
  providers: [PokemonService]
})
export class PokemonModule { }
