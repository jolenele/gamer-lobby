import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddPlayerComponent } from './component/add-player/add-player.component';
import { EditPlayerComponent } from './component/edit-player/edit-player.component'
import { PlayerListComponent } from './component/players-list/players-list.component';
import { LoginComponent } from './component/login/login.component';
import { GameListComponent } from './component/game-list/game-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'players-list', pathMatch: 'full' },
  { path: 'add-player', component: AddPlayerComponent },
  { path: 'edit-player/:id', component: EditPlayerComponent },
  { path: 'players-list', component: PlayerListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'games-list', component: GameListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
