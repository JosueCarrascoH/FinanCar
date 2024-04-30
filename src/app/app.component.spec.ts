import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'TrabajoFinal'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('TrabajoFinal');
  });

  it('suma 2+2 = 4', () => {
    const suma = 2+2;
    expect(suma).toBe(4);
  });

  it('suma 2+3 = 5', () => {
    const suma = 2+3;
    expect(suma).toBe(5);
  });

  it('suma 3+3 = 6', () => {
    const suma = 3+3;
    expect(suma).toBe(6);
  });

});

