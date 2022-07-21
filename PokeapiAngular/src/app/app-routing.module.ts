import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./core/home/home.component";

const routes: Routes = [
    {
        path: 'pokedex',
        loadChildren: () => import('./pokemons/pokemon.module').then(m => m.PokemonModule)
    },
    { path: '', component:HomeComponent, redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule {}