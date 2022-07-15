import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import { PokemonsResolver } from "./pokemon-list/pokemons.resolver";
import { PokemonAddComponent } from "./pokemon/add/pokemon-add.component";
import { PokemonProfileComponent } from "./pokemon/profile/pokemon-profile.component";
import { PokemonResolver } from "./pokemon/profile/pokemon.resolver";

const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent,
    resolve: {
      pokemons: PokemonsResolver
    }
  },
  {
    path: 'add', 
    component: PokemonAddComponent
  },
  {
    path: ':id', 
    component: PokemonProfileComponent, 
    resolve: {
      pokemon: PokemonResolver
    }
  }
  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }