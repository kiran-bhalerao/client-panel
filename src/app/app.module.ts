import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientComponent } from './components/client/client.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { NavabarComponent } from './components/navabar/navabar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AuthenticationService } from './service/authentication.service';
import { ClientService } from './service/client.service';
import { AuthGuard } from './gaurds/auth.gaurd';
import { RegGuard } from './gaurds/reg.gaurd';
import { FooterComponent } from './components/footer/footer.component';
import { SettingComponent } from './components/setting/setting.component';
import { SettingService } from './service/setting.service';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [RegGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'setting', component: SettingComponent, canActivate: [AuthGuard] },
  { path: 'add-client', component: AddClientComponent, canActivate: [AuthGuard] },
  { path: 'client/:id', component: ClientDetailsComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: EditClientComponent, canActivate: [AuthGuard] },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent }
]

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyClB9F16MQCBZBnyLKzKbbmX2KgYnWfsb8",
    authDomain: "client-panel-7aa09.firebaseapp.com",
    databaseURL: "https://client-panel-7aa09.firebaseio.com",
    projectId: "client-panel-7aa09",
    storageBucket: "client-panel-7aa09.appspot.com",
    messagingSenderId: "734797377348"
  }
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientComponent,
    ClientDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    NavabarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    FooterComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features

  ],
  providers: [ClientService, AuthenticationService, SettingService, AuthGuard, RegGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
