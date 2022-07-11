import { NgModule } from '@angular/core';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { FormsModule } from '@angular/forms';
import { PokemonCardComponent } from './pokemon-list/pokemon-card.component';
import { CoreModule } from '../core/core.module';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonProfileComponent } from './pokemon/profile/pokemon-profile.component';
import { CommonModule } from '@angular/common';
import { DescriptionCardComponent } from './pokemon/profile/components/description-card.component';

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonCardComponent,
    PokemonProfileComponent,
    DescriptionCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    PokemonRoutingModule
  ],
  providers: [],
  exports: []
})
export class PokemonModule { }
