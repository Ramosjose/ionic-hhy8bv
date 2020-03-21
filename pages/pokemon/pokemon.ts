import { Component,  OnInit  } from '@angular/core';
import { NavController } from 'ionic-angular';
import {  PokeApiService } from '../../app/poke-api.service';

@Component({
  selector: 'page-pokemon',
  templateUrl: 'pokemon.html'
})
export class PokemonPage implements OnInit{
pokemons: any[] = [];

  constructor(public pokeService: PokeApiService, public navCtrl: NavController) { }
   ngOnInit() {
  }
ionViewDidLoad(){
    this.pokeService.getPokemon()
    .subscribe(
      (data) => { // Success
        this.pokemon = data['results'];
      },
      (error) =>{
        console.error(error);
      }
    )
  }
}