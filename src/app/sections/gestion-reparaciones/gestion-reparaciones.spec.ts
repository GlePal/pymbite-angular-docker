import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionReparaciones } from './gestion-reparaciones';

describe('GestionReparaciones', () => {
  let component: GestionReparaciones;
  let fixture: ComponentFixture<GestionReparaciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionReparaciones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionReparaciones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
