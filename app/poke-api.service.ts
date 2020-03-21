import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class PokeApiService {
  private baseUrl: string = "https://pokeapi.co/api/v2/";

  private imageUrl: string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png";

  constructor(private http: HttpClient) { }
getPokemon() {
    return this.http.get(this.baseUrl);
  }
}