import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar/seaarch-bar.component';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HomeComponent } from './home/home.component';
import { TagComponent } from './tag/tag.component';

const materialModules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule
];
@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    SearchBarComponent,
    TagComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ...materialModules
  ],
  providers: [],
  exports: [
    HeaderComponent,
    HomeComponent,
    SearchBarComponent,
    TagComponent
  ]
})
export class CoreModule { }
