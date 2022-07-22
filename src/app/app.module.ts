import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,FormControl,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { TutorialDetailsComponent } from './tutorial-details/tutorial-details.component';
import { EvaluacionComponent } from './Evaluacion/evaluacion.component';


import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { PPPComponent } from './PPP/PPP.component';

import { PPPPraComponent } from './PPPPra/PPPPra.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
// import { firebaseConfig } from 'src/environments/environment';
import { EvaluacionPraComponent } from './EvaluacionPra/evaluacionPra.component';
import { environment } from 'src/environments/environment';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NbThemeModule } from '@nebular/theme';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    TutorialDetailsComponent,
    PPPComponent,
    PPPPraComponent,
    EvaluacionComponent,
    EvaluacionPraComponent,
    DashboardComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireStorageModule,
    NgbModule,
    ReactiveFormsModule,
    NbThemeModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
   
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
