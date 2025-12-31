import { Component, HostListener, AfterViewInit, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Orden } from '../ordenes/models/orden.interface';
import { OrdenesService } from '../ordenes/services/ordenes.service';

@Component({
  selector: 'app-gestion-reparaciones',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gestion-reparaciones.html',
  styleUrls: ['./gestion-reparaciones.css'],
})
export class GestionReparaciones implements AfterViewInit, OnInit {
  private ordenesService = inject(OrdenesService);

  tituloVisible = false;

  estadoFiltro: Orden['informacion']['estado'] | '' = '';
  prioridadFiltro: Orden['informacion']['prioridad'] | '' = '';
  clienteFiltro = '';

  ordenes: Orden[] = [];

  ngOnInit(): void {
    this.ordenesService.getOrdenes().subscribe({
      next: (data) => {
        this.ordenes = data;
      },
      error: (err) => {
        console.error('Error al cargar órdenes:', err);
        alert('No se pudieron cargar las órdenes');
      },
    });
  }

  get ordenesFiltradas(): Orden[] {
    const clienteTerm = this.clienteFiltro.trim().toLowerCase();
    return this.ordenes.filter((o) => {
      const estadoOK = this.estadoFiltro ? o.informacion.estado === this.estadoFiltro : true;
      const prioridadOK = this.prioridadFiltro ? o.informacion.prioridad === this.prioridadFiltro : true;
      const clienteOK = clienteTerm ? o.cliente.nombre.toLowerCase().includes(clienteTerm) : true;
      return estadoOK && prioridadOK && clienteOK;
    });
  }

  editarOrden(index: number): void {
    const orden = this.ordenes[index];
    alert(`Editando orden de ${orden.cliente.nombre}`);
  }

  eliminarOrden(index: number): void {
    const orden = this.ordenes[index];
    if (confirm(`¿Eliminar la orden de ${orden.cliente.nombre}?`)) {
      this.ordenes.splice(index, 1);
    }
  }

  imprimirOrden(index: number): void {
    const orden = this.ordenes[index];
    alert(`Imprimiendo orden de ${orden.cliente.nombre}`);
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const titulo = document.getElementById('titulo');
    if (!titulo) return;

    const rect = titulo.getBoundingClientRect();
    const visible = rect.top < window.innerHeight && rect.bottom > 0;
    if (visible && !this.tituloVisible) {
      this.tituloVisible = true;
      titulo.classList.add('titulo-visible');
    }
  }

  ngAfterViewInit(): void {
    this.onScroll();
  }
}