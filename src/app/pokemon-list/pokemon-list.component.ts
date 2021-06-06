import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/_services/pokemon.service';
import { Pokemon } from '../../_model/Pokemon';
import { Type } from './../../_model/Type';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent implements OnInit {

  constructor(
    public pokemonService: PokemonService,
  ) { }

  ngOnInit(): void {
  }
}
