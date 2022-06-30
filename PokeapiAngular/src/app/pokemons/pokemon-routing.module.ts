import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import { PokemonProfileComponent } from "./pokemon/profile/pokemon-profile.component";

const routes: Routes = [
    { path: 'pokedex', component: PokemonListComponent },
    { path: 'pokedex/:id', component: PokemonProfileComponent },
    { path: '', redirectTo: '/pokedex', pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class PokemonRoutingModule {}