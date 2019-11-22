import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlayerRankingComponent } from './player-ranking/player-ranking.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

import { AddPlayerComponent } from './component/add-player/add-player.component';
import { EditPlayerComponent } from './component/edit-player/edit-player.component'
import { PlayerListComponent } from './component/player-list/player-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'player-list', pathMatch: 'full' },
  { path: 'player-ranking', component: PlayerRankingComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'add-player', component: AddPlayerComponent },
  { path: 'edit-player/:id', component: EditPlayerComponent },
  { path: 'player-list', component: PlayerListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }