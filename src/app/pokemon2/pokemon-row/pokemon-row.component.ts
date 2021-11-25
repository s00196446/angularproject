import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Pokemon } from 'src/app/pokemon';

@Component({
  selector: 'app-pokemon-row',
  templateUrl: './pokemon-row.component.html',
  styleUrls: ['./pokemon-row.component.css']
})
export class PokemonRowComponent implements OnInit {
  
  @Input()
  pokemon?: Pokemon;
  @Output() pokemonFormClose = new EventEmitter<Pokemon>();
  message: string="";
  pokemonForm?:FormGroup;

  constructor() {}

  ngOnInit(): void {
  }

};