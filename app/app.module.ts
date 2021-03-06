import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PokemonPage } from '/pages/pokemon/pekemon';

import { UserApiService } from './user-api.service';
import {HttpClientModule} from '@angular/common/http';
import { PokeApiService } from './poke-api.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PokemonPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    PokemonPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}, UserApiService, PokeApiService
  ]
})
export class AppModule {}
