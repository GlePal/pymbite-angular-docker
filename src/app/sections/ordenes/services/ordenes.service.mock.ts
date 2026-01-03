import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Orden } from '../models/orden.interface';

@Injectable({
  providedIn: 'root'
})
export class OrdenesServiceMock {
  getOrdenes(): Observable<Orden[]> {
    const ordenesFicticias: Orden[] = [
      {
        cliente: { nombre: 'Juan Pérez', telefono: '0414-1234567', direccion: 'Av. Bolívar' },
        dispositivo: {
          tipo: 'Laptop', marca: 'Dell', modelo: 'Inspiron',
          accesorios: 'Cargador', condiciones: 'Buen estado',
          descripcionAdicional: 'Pantalla con rayas'
        },
        informacion: {
          falla: 'No enciende', diagnostico: 'Fuente dañada',
          estado: 'Recibido', prioridad: 'Alta',
          fechaIngreso: '2026-01-02', fechaEntrega: '2026-01-05', fechaFinalizacion: ''
        },
        costos: { presupuesto: '50$', costoFinal: 60, formaPago: 'Dólares', autorizacion: true },
        seguimiento: { notasInternas: 'Pendiente repuesto', historial: 'Creada el 02/01/2026' }
      },
      {
        cliente: { nombre: 'María Gómez', telefono: '0412-7654321', direccion: 'Calle Sucre' },
        dispositivo: {
          tipo: 'Teléfono', marca: 'Samsung', modelo: 'Galaxy S21',
          accesorios: 'Cable USB', condiciones: 'Rayado',
          descripcionAdicional: 'Batería inflada'
        },
        informacion: {
          falla: 'No carga', diagnostico: 'Puerto dañado',
          estado: 'En proceso', prioridad: 'Media',
          fechaIngreso: '2026-01-01', fechaEntrega: '2026-01-04', fechaFinalizacion: ''
        },
        costos: { presupuesto: '30$', costoFinal: 35, formaPago: 'Bolívares', autorizacion: false },
        seguimiento: { notasInternas: 'Esperando aprobación', historial: 'Creada el 01/01/2026' }
      }
    ];

    return of(ordenesFicticias);
  }
}