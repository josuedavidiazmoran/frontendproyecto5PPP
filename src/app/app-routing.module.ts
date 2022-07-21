import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { TutorialDetailsComponent } from './tutorial-details/tutorial-details.component';
import { PPPComponent } from './PPP/PPP.component';
import { PPPPraComponent } from './PPPPra/PPPPra.component';
import { EvaluacionComponent } from './Evaluacion/evaluacion.component';
import { EvaluacionPraComponent } from './EvaluacionPra/evaluacionPra.component';


const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'ppps', component: PPPComponent },
  
  { path: 'pppsPra', component: PPPPraComponent },
  { path: 'ppp/:id', component: EvaluacionComponent },
  
  { path: 'pppPra/:id', component: EvaluacionPraComponent },
  
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
