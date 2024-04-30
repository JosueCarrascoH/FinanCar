import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserToolbarComponent } from './components/user-toolbar/user-toolbar.component';
import { BanksComponent } from './components/banks/banks.component';
import { SimulatorComponent } from './components/simulator/simulator.component';
import { DataComponent } from './components/data/data.component';
import { ProfileComponent } from './components/profile/profile.component';
import {CarsComponent} from "./components/cars/cars.component";
import {CreditCheckComponent} from "./components/credit-check/credit-check.component";

const routes: Routes = [
  {path: '',  redirectTo: '/', pathMatch: 'full'},
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: "banks", component: BanksComponent},
  {path: "simulator", component: SimulatorComponent},
  {path: "data", component: DataComponent},
  {path: "profile", component: ProfileComponent},
  {path: "cars", component: CarsComponent},
  {path: "credit-check", component: CreditCheckComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
