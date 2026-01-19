import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Importamos la directiva
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

// Importamos la interfaz y servicio
import { Orden } from './models/orden.interface';
import { OrdenesServiceMock } from './services/ordenes.service.mock'; // ✅ usar el mock

@Component({
  selector: 'app-ordenes',
  standalone: true,
  imports: [CommonModule, FormsModule, AnimateOnScrollDirective],
  templateUrl: './ordenes.html',
  styleUrls: ['./ordenes.css'],
})
export class Ordenes {
  private ordenesService = inject(OrdenesServiceMock);

  orden: Orden = {
    id: Date.now().toString(), // ✅ id obligatorio
    cliente: { nombre: '', telefono: '', direccion: '' },
    dispositivo: {
      tipo: '', marca: '', modelo: '', accesorios: '',
      condiciones: '', descripcionAdicional: '',
    },
    informacion: {
      falla: '', diagnostico: '',
      estado: '' as Orden['informacion']['estado'],
      prioridad: '' as Orden['informacion']['prioridad'],
      fechaIngreso: '', fechaEntrega: '', fechaFinalizacion: '',
    },
    costos: { presupuesto: '', costoFinal: 0, formaPago: '', autorizacion: false },
    seguimiento: { notasInternas: '', historial: '' },
  };

  guardarOrden(): void {
    this.ordenesService.createOrden(this.orden).subscribe({
      next: (ordenGuardada: Orden) => {
        console.log('Orden guardada en API:', ordenGuardada);
        alert('Orden registrada correctamente');
        this.resetForm();
      },
      error: (err: unknown) => {
        console.error('Error al guardar la orden:', err);
        alert('Hubo un error al registrar la orden');
      },
    });
  }

  resetForm(): void {
    this.orden = {
      id: Date.now().toString(), // ✅ nuevo id cada vez
      cliente: { nombre: '', telefono: '', direccion: '' },
      dispositivo: {
        tipo: '', marca: '', modelo: '', accesorios: '',
        condiciones: '', descripcionAdicional: '',
      },
      informacion: {
        falla: '', diagnostico: '',
        estado: '' as Orden['informacion']['estado'],
        prioridad: '' as Orden['informacion']['prioridad'],
        fechaIngreso: '', fechaEntrega: '', fechaFinalizacion: '',
      },
      costos: { presupuesto: '', costoFinal: 0, formaPago: '', autorizacion: false },
      seguimiento: { notasInternas: '', historial: '' },
    };
  }
}