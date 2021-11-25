import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonListComponent } from './pokemon2/pokemon-list/pokemon-list.component';
import { PokemonRowComponent } from './pokemon2/pokemon-row/pokemon-row.component';
import { PokemonDetailsComponent } from './pokemon2/pokemon-details/pokemon-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SampleFormComponent } from './pokemon2/pokemon2/sample-form/sample-form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonListComponent,
    PokemonRowComponent,
    PokemonDetailsComponent,
    SampleFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
