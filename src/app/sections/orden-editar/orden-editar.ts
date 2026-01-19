/**
 * Archivo: orden-editar.ts
 * Correcciones:
 * - Se usa inject() en lugar de constructor injection.
 * - Se tiparon parámetros en subscribe (Orden, unknown).
 * - Se ajustó updateOrden(id, payload).
 * - Se usa OrdenesServiceMock como fuente de datos.
 */

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Orden } from '../ordenes/models/orden.interface';
import { OrdenesServiceMock } from '../ordenes/services/ordenes.service.mock';

@Component({
  selector: 'app-orden-editar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './orden-editar.html',
  styleUrls: ['./orden-editar.css'],
})
export class OrdenEditar {
  ordenId: string | null = null;
  ordenSeleccionada: Orden | null = null;

  private route = inject(ActivatedRoute);
  private ordenesService = inject(OrdenesServiceMock); // ✅ usamos el mock

  constructor() {
    this.ordenId = this.route.snapshot.paramMap.get('id');

    if (this.ordenId) {
      this.ordenesService.getOrdenById(this.ordenId).subscribe({
        next: (orden: Orden | undefined) => {
          this.ordenSeleccionada = orden ?? null;
        },
        error: (err: unknown) => console.error('Error cargando orden', err),
      });
    }
  }

  guardarCambios(): void {
    if (this.ordenSeleccionada && this.ordenId) {
      this.ordenesService.updateOrden(this.ordenId, this.ordenSeleccionada).subscribe({
        next: (ordenActualizada: Orden) => {
          alert(`Orden ${ordenActualizada.id} actualizada correctamente`);
        },
        error: (err: unknown) => console.error('Error al actualizar orden', err),
      });
    }
  }
}