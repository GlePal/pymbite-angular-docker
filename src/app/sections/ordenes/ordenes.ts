import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Importamos la interfaz Orden
import { Orden } from './models/orden.interface';

// Importamos el servicio
import { OrdenesService } from './services/ordenes.service';

@Component({
  selector: 'app-ordenes',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ añadimos CommonModule
  templateUrl: './ordenes.html',
  styleUrls: ['./ordenes.css'],
})
export class Ordenes {
  // Inyectamos el servicio
  private ordenesService = inject(OrdenesService);

  // Objeto tipado con la interfaz Orden
  orden: Orden = {
    cliente: { nombre: '', telefono: '', direccion: '' },
    dispositivo: {
      tipo: '',
      marca: '',
      modelo: '',
      accesorios: '',
      condiciones: '',
      descripcionAdicional: '',
    },
    informacion: {
      falla: '',
      diagnostico: '',
      estado: '' as Orden['informacion']['estado'],
      prioridad: '' as Orden['informacion']['prioridad'],
      fechaIngreso: '',
      fechaEntrega: '',
      fechaFinalizacion: '',
    },
    costos: {
      presupuesto: '',
      costoFinal: 0,
      formaPago: '',
      autorizacion: false,
    },
    seguimiento: { notasInternas: '', historial: '' },
  };

  // Método para guardar la orden
  guardarOrden(): void {
    this.ordenesService.createOrden(this.orden).subscribe({
      next: (ordenGuardada) => {
        console.log('Orden guardada en API:', ordenGuardada);
        alert('Orden registrada correctamente');
        this.resetForm();
      },
      error: (err) => {
        console.error('Error al guardar la orden:', err);
        alert('Hubo un error al registrar la orden');
      },
    });
  }

  // Método auxiliar para limpiar el formulario
  resetForm(): void {
    this.orden = {
      cliente: { nombre: '', telefono: '', direccion: '' },
      dispositivo: {
        tipo: '',
        marca: '',
        modelo: '',
        accesorios: '',
        condiciones: '',
        descripcionAdicional: '',
      },
      informacion: {
        falla: '',
        diagnostico: '',
        estado: '' as Orden['informacion']['estado'],
        prioridad: '' as Orden['informacion']['prioridad'],
        fechaIngreso: '',
        fechaEntrega: '',
        fechaFinalizacion: '',
      },
      costos: {
        presupuesto: '',
        costoFinal: 0,
        formaPago: '',
        autorizacion: false,
      },
      seguimiento: { notasInternas: '', historial: '' },
    };
  }
}