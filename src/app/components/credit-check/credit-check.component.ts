import {Component, Inject, OnInit} from '@angular/core';
import {ExcludedUsersService} from "../../services/excluded_users/excluded-users.service";
import {Excluded_users} from "../../models/excluded_users";
import {Router} from "@angular/router";
import {ExcludedUsersPrueba} from "../../models/excluded_users_prueba";

@Component({
  selector: 'app-credit-check',
  templateUrl: './credit-check.component.html',
  styleUrls: ['./credit-check.component.css']
})
export class CreditCheckComponent implements OnInit{

  validateDni: boolean = true;
  excludedUserDNIs: string[] = [];
  dniInput: string = '';
  message: string = '';

  constructor(
    private ExcludedUsersPrueba: ExcludedUsersPrueba,
    private router: Router
  ) { }

  ngOnInit() {
    this.excludedUserDNIs = this.ExcludedUsersPrueba.getDNIList();
  }

  checkDNILength(): boolean {
    if (this.dniInput.length === 8) {
      return true;
    }
    else
      this.message = 'El DNI debe tener 8 dígitos.';
      return false
  }


  checkDNI() {
    if(this.checkDNILength()) {
      if (this.excludedUserDNIs.includes(this.dniInput)) {
        this.message = 'El DNI está en la lista de usuarios excluidos.';
        this.validateDni = false;
      } else {
        this.message = 'El DNI no está en la lista de usuarios excluidos.';
        this.router.navigate(['/simulator']);
      }
    }
  }

  goToCarsComponent() {
    this.router.navigate(['/cars']); // Suponiendo que la ruta al CarsComponent sea 'cars'
  }
}

