import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { FormsModule } from '@angular/forms';
import { PokemonCardComponent } from './pokemon-list/pokemon-card.component';
import { CoreModule } from '../core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './pokemon.service';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonProfileComponent } from './pokemon/profile/pokemon-profile.component';

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonCardComponent,
    PokemonProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [
    PokemonService
  ],
  exports: [
    PokemonListComponent,
    PokemonProfileComponent,
    PokemonRoutingModule
  ]
})
export class PokemonModule { }
