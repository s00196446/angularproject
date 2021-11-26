import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/pokemon';
import { PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemonList: Pokemon[] = [];
  message: string = '';
  showPokemonForm: boolean = false;

  currentPokemon? : Pokemon = undefined;

  openAddPokemon():void{
    this.currentPokemon = undefined;
    this.showPokemonForm = true;
  }
  
  clicked(pokemon:Pokemon): void{
    this.currentPokemon = pokemon;
  }

  pokemonFormClose(pokemon?: Pokemon): void {
    this.showPokemonForm = false;
    console.table(pokemon);
    if (pokemon == null) {
      this.message = "form closed without saving";
      this.currentPokemon = undefined
    }
    else if (this.currentPokemon == null) {
      this.addNewPokemon(pokemon);
    }
  }

  

  addNewPokemon(newPokemon: Pokemon): void {
    console.log('adding new pokemon ' + JSON.stringify(newPokemon));
    this.pokemonService.addPokemon({ ...newPokemon })

    // so the updated list appears

    this.pokemonService.getPokemons().subscribe({
      next: (value: Pokemon[]) => this.pokemonList = value,
      complete: () => console.log('pokemon service finished'),
      error: (mess) => this.message = mess
    })
  }


  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe({
      next: (value: Pokemon[] )=> this.pokemonList = value,
      complete: () => console.log('pokemon service finished'),
      error: (mess) => this.message = mess

  })

  }

}
