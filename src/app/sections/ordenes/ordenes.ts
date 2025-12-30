import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ordenes',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ordenes.html',
  styleUrl: './ordenes.css',
})
export class Ordenes {
  orden = {
    cliente: {
      nombre: '',
      telefono: '',
      direccion: '',
    },
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
      estado: '',
      prioridad: '',
      fechaIngreso: '',
      fechaEntrega: '',
      fechaFinalizacion: '',
    },
    costos: {
      presupuesto: '',
      costoFinal: '',
      formaPago: '',
      autorizacion: false,
    },
    seguimiento: {
      notasInternas: '',
      historial: '',
    },
  };

  guardarOrden() {
    console.log('Orden guardada:', this.orden);
    alert('Orden registrada correctamente');
  }
}