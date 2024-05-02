import { Component, ViewChild } from '@angular/core';
import { Data } from 'src/app/models/data';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  MaxCuotas: boolean = false;
  pagos: any[] = [];
  fechaInicio: Date = new Date(); // Fecha de inicio de los pagos
  numeroCuotas: number = 0; // Número total de cuotas permitidas

  historyData: Data;
  data: Data[] = [];
  displayedColumns: string[] = ['numero', 'moneda', 'precioVivienda', 'cuotaInicial', 'tasaEfectiva', 'numeroCuotas', 'periodoGraciaTotal', 'periodoGraciaParcial', 'cuota'];

  dataSource = new MatTableDataSource<Data>(this.data);
  clickedRows = new Set<Data>();

  constructor(private authService: AuthService, private dataService: DataService, private liveAnnouncer: LiveAnnouncer) {
    this.historyData = {} as Data;
    this.getNumeroCuotas(); // Obtener el número total de cuotas permitidas
  }

  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator

  ngOnInit(): void {
    this.getHistory();
    this.dataSource.paginator = this.paginator;
  }

  getHistory(): void {
    this.dataService.getList().subscribe((datos: Data[]) => {
        console.log(datos);
        this.dataSource.data = datos.filter((dato: Data) => dato.userId === this.authService.getUser()?.id);
      },
      (error) => {
        console.log('Error al obtener los datos:', error);
      }
    )
  }
  VerificarCuotas(): boolean {
    return this.numeroCuotas == 0;
  }
  agregarPago(): void {
    if (this.pagos.length < this.numeroCuotas && !this.VerificarCuotas()) {
      const numeroPago = this.pagos.length + 1;
      const fechaPago = this.calcularFechaPago(numeroPago - 1);
      this.pagos.push({ numero: numeroPago, fechaPago: fechaPago, pagado: false });
    } else if (this.VerificarCuotas()){
      alert('No se pueden agregar pagos porque no solicitaste un crédito');
    }
    else {
      alert('Ya se han agregado todas las cuotas permitidas.');
      this.MaxCuotas = true;
    }
  }

  calcularFechaPago(numeroPago: number): Date {
    const fechaPago = new Date(this.fechaInicio);
    fechaPago.setMonth(fechaPago.getMonth() + numeroPago);
    return fechaPago;
  }

  getNumeroCuotas(): void {
    this.dataService.getNumeroCuotas().subscribe(
      (numero: number) => {
        this.numeroCuotas = numero;
      },
      (error) => {
        console.error('Error al obtener el número de cuotas:', error);
      }
    );
  }

}
