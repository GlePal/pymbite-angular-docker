import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Orden } from '../ordenes/models/orden.interface';

@Component({
  selector: 'app-orden-detalle-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orden-detalle-modal.html',
  styleUrls: ['./orden-detalle-modal.css'],
})
export class OrdenDetalleModal {
  @Input() orden!: Orden;
  @Output() cerrar = new EventEmitter<void>();

  cerrarModal(): void {
    this.cerrar.emit();
  }
}