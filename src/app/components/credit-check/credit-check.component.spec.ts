import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import { CreditCheckComponent } from './credit-check.component';
import {HttpClientModule} from "@angular/common/http";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {CarsComponent} from "../cars/cars.component";
import {UserToolbarComponent} from "../user-toolbar/user-toolbar.component";
import {FormsModule} from "@angular/forms";
import {ExcludedUsersService} from "../../services/excluded_users/excluded-users.service";
import {ExcludedUsersPrueba} from "../../models/excluded_users_prueba";

describe('CreditCheckComponent', () => {
  let component: CreditCheckComponent;
  let fixture: ComponentFixture<CreditCheckComponent>;
  let excludedUsersPrueba: ExcludedUsersPrueba;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule,RouterModule, MatIconModule, FormsModule],
      declarations: [CreditCheckComponent, UserToolbarComponent],
      providers: [ { provide: ExcludedUsersPrueba, useValue: new ExcludedUsersPrueba() } ] // Mock ExcludedUsersPrueba
    }).compileComponents();


    fixture = TestBed.createComponent(CreditCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set validateDni to false when DNI is not excluded', fakeAsync(() => {
    const testDNI = '12345678'; // Example DNI not in the excluded list (assuming your ExcludedUsersPrueba has different DNs)
    component.dniInput = testDNI;

    component.checkDNI();
    tick(); // Simulate asynchronous operations (if any)

    expect(component.validateDni).toBeFalsy();
  }));
  it('should show error message when DNI length is not 8', fakeAsync(() => {
    const invalidDNIs = ['12345', '1234567', '123456789']; // Examples of invalid DNIs (less or more than 8 digits)

    for (const invalidDNI of invalidDNIs) {
      component.dniInput = invalidDNI;
      component.checkDNI();
      tick();

      expect(component.validateDni).toBeTruthy(); // validateDni should remain true
      expect(component.message).toBe('El DNI debe tener 8 dígitos.'); // Error message should appear
    }
  }));
});
