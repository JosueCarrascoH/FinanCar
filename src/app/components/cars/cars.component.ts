import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Cars} from "../../models/cars";
import {CarsService} from "../../services/cars/cars.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit{


  @Input() auto: any;
  cars: Cars[] = [];

  newCars: Cars = {
    image: '',
    car_brand: '',
    description: '',
    price: '',
    id: '',
  };
  http: any;

  constructor(private listServ: CarsService, private router: Router) { }

  ngOnInit(): void {
    this.getCompanyList();
  }

  getCompanyList() {
    this.listServ.getList().subscribe(
      (res: any) => {
        console.log(res);
        this.cars = res;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  evaluarAuto() {
    this.router.navigate(['/credit-check']); // Ajusta la ruta según tu configuración
  }
}
