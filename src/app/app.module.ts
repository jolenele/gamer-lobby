import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPlayerComponent } from './component/add-player/add-player.component';
import { EditPlayerComponent } from './component/edit-player/edit-player.component';
import { PlayerListComponent } from './component/player-list/player-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPlayerComponent,
    EditPlayerComponent,
    PlayerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
