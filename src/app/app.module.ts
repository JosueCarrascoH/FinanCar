import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import {AuthService} from "./services/auth.service";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { MaterialModule } from 'src/shared/material.module';
import { DataService} from "./services/data.service";
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserToolbarComponent } from './components/user-toolbar/user-toolbar.component';
import { BanksComponent } from './components/banks/banks.component';
import { SimulatorComponent } from './components/simulator/simulator.component';
import { DataComponent } from './components/data/data.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CarsComponent } from './components/cars/cars.component';
import { CreditCheckComponent } from './components/credit-check/credit-check.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {ExcludedUsersPrueba} from "./models/excluded_users_prueba";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserToolbarComponent,
    BanksComponent,
    SimulatorComponent,
    DataComponent,
    ProfileComponent,
    CarsComponent,
    CreditCheckComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    RouterModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    DataService,
    AuthService,
    ExcludedUsersPrueba
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
