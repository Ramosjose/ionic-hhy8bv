import { Component } from '@angular/core';
import { PokemonPage } from '../pokemon/pekemon';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = PokemonPage;
  constructor() {

  }
}
