import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CardCharacterComponent } from './components/card-character/card-character.component';
import { CharacterRoutingModule } from './character-routing.module';
import { IndexPageComponent } from './components/index-page/index-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    HomeComponent,
    ListadoComponent,
    ProfileComponent,
    CardCharacterComponent,
    IndexPageComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class CharactersModule { }
