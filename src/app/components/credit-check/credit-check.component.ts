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
    this.getExcludedDnis();
  }

  checkDNILength(): boolean {
    return this.dniInput.length === 8;
  }

  getExcludedDnis():void{
    this.excludedUserDNIs = this.ExcludedUsersPrueba.getDNIList();
  }

  validateDNIExclusion():boolean{
    return this.excludedUserDNIs.includes(this.dniInput)
  }

  checkDNI() {
    if (!this.checkDNILength()) {
      this.message = 'El DNI debe tener 8 dígitos.';
      return;     }

    if (this.validateDNIExclusion()) {
      this.message = 'El DNI está en la lista de usuarios excluidos.';
      this.validateDni = false;
    } else {
      this.message = 'El DNI es válido. Puede continuar.';
      this.router.navigate(['/simulator']);
    }
  }

  goToCarsComponent() {
    this.router.navigate(['/cars']); // Suponiendo que la ruta al CarsComponent sea 'cars'
  }
}

