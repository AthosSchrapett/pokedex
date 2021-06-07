import { map } from 'rxjs/operators';
import { Type } from './../../_model/Type';
import { Component, Input, OnInit } from '@angular/core';
import { Pokemon, getPokemonNumber, getPokemonImage } from 'src/_model/Pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})
export class PokemonCardComponent implements OnInit {

  constructor() {
    this.pokemon = {
      image: '',
      number: 0,
      name: '',
      types: [],
    }
  }

  ngOnInit(): void {
  }

  @Input()
  public pokemon: Pokemon;

  public getPokemonNumber = getPokemonNumber;
  public getPokemonImage = getPokemonImage;

}
