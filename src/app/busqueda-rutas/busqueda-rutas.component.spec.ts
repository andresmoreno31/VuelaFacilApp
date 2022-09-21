import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaRutasComponent } from './busqueda-rutas.component';

describe('BusquedaRutasComponent', () => {
  let component: BusquedaRutasComponent;
  let fixture: ComponentFixture<BusquedaRutasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedaRutasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusquedaRutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
