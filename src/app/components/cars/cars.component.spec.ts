import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsComponent } from './cars.component';
import {HttpClientModule} from "@angular/common/http";
import {ActivatedRoute, RouterModule} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {BanksComponent} from "../banks/banks.component";
import {UserToolbarComponent} from "../user-toolbar/user-toolbar.component";

describe('CarsComponent', () => {
  let component: CarsComponent;
  let fixture: ComponentFixture<CarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,RouterModule, MatIconModule],
      declarations: [CarsComponent, UserToolbarComponent],
      providers: [
        { provide: ActivatedRoute, useValue: {}  }],
    });
    fixture = TestBed.createComponent(CarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
