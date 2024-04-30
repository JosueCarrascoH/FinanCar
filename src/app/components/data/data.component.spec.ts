import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataComponent } from './data.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {UserToolbarComponent} from "../user-toolbar/user-toolbar.component";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatIconModule} from "@angular/material/icon";
import {ActivatedRoute, RouterModule} from "@angular/router";
import {BehaviorSubject} from "rxjs";
import {MatTableModule} from "@angular/material/table";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
class ActivatedRouteStub {
  private subject = new BehaviorSubject(this.testParams);
  params = this.subject.asObservable();

  // Aquí puedes definir los parámetros que necesites para tu prueba
  private _testParams: any;
  get testParams() { return this._testParams; }
  set testParams(params: any) {
    this._testParams = params;
    this.subject.next(params);
  }
}
describe('DataComponent', () => {
  let component: DataComponent;
  let fixture: ComponentFixture<DataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule, MatPaginatorModule, MatIconModule,
        MatTableModule, RouterModule,
        BrowserModule,
        BrowserAnimationsModule, ],
      providers: [
        { provide: ActivatedRoute, useClass: ActivatedRouteStub }],
      declarations: [DataComponent, UserToolbarComponent]
    });
    fixture = TestBed.createComponent(DataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
