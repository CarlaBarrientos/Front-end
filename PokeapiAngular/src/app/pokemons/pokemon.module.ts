import { NgModule } from '@angular/core';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PokemonCardComponent } from './pokemon-list/pokemon-card.component';
import { CoreModule } from '../core/core.module';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonProfileComponent } from './pokemon/profile/pokemon-profile.component';
import { CommonModule } from '@angular/common';
import { DescriptionCardComponent } from './pokemon/profile/components/description-card.component';
import { StatsCardComponent } from './pokemon/profile/components/stats-card.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { GeneralInformationComponent } from './pokemon/profile/components/general-information-card.component';
import { TypeCardComponent } from './pokemon/profile/components/type-card.component';
import { PokemonAddComponent } from './pokemon/add/pokemon-add.component';
import { EvolutionCardComponent } from './pokemon/profile/components/evolution-card.component';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FiltersComponent } from './pokemon-list/filters.component';

const materialModules = [
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
];
@NgModule({
  declarations: [
    DescriptionCardComponent,
    EvolutionCardComponent,
    FiltersComponent,
    GeneralInformationComponent,
    PokemonAddComponent,
    PokemonCardComponent,
    PokemonListComponent,
    PokemonProfileComponent,
    StatsCardComponent,
    TypeCardComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    PokemonRoutingModule,
    ReactiveFormsModule,
    ...materialModules
  ],
  providers: [],
  exports: []
})
export class PokemonModule { }
