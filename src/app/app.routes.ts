import { Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: LoginComponent }, // Definindo tela inicial da app (login)
  { path: 'home', component: HomeComponent } // Definindo rota para a tela home
];
