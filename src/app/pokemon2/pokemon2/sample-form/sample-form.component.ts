import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pokemon } from 'src/app/pokemon';
import { PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.css']
})
export class SampleFormComponent implements OnInit {

  
  currentPokemon!: Pokemon;

  @Output() newPokemonEvent = new EventEmitter<Pokemon>();
  message: string = "";

  pokemonForm : FormGroup = new FormGroup({
    Name: new FormControl ('', [Validators.required]),
    Generation: new FormControl ('', [Validators.required]),
    Type: new FormControl('', [Validators.required]),
    PokedexNo: new FormControl('',[Validators.required])
  })

  constructor(private pokemonservice: PokemonService) { }

  ngOnInit(): void {
    
  }
  onSubmit() {
    console.log('forms submitted with ');
    console.table(this.pokemonForm.value);
    this.currentPokemon=this.pokemonForm.value
    this.pokemonservice.addPokemon(this.currentPokemon)
    .subscribe({
      next: pokemon => {
        console.log(pokemon)
      },
      error:(err) => this.message=err
    })
  }

  closeForm(){
    
  }

  get Name() {
    return this.pokemonForm.get('Name');
  }
  get Generation() {
    return this.pokemonForm.get('Generation');
  }
  get Type() {
    return this.pokemonForm.get('Type');
  }
  get PokedexNo(){
    return this.pokemonForm.get('PokedexNo')
  }
  

}
