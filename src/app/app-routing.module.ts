import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddPlayerComponent } from './component/add-player/add-player.component';
import { EditPlayerComponent } from './component/edit-player/edit-player.component'
import { PlayerListComponent } from './component/player-list/player-list.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'player-list', pathMatch: 'full' },
  { path: 'add-player', component: AddPlayerComponent },
  { path: 'edit-player/:id', component: EditPlayerComponent },
  { path: 'player-list', component: PlayerListComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
