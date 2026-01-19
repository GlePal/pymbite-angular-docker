import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenDetalleModal } from './orden-detalle-modal';

describe('OrdenDetalleModal', () => {
  let component: OrdenDetalleModal;
  let fixture: ComponentFixture<OrdenDetalleModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdenDetalleModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenDetalleModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
