import { Component, HostListener, AfterViewInit, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { Orden } from '../ordenes/models/orden.interface';
import { OrdenesService } from '../ordenes/services/ordenes.service';

@Component({
  selector: 'app-gestion-reparaciones',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
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

  modalVisible = false;
  ordenSeleccionada: Orden | null = null;

  ngOnInit(): void {
    this.ordenesService.getOrdenes().subscribe({
      next: (data) => this.ordenes = data,
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
    alert(`Editando orden de ${this.ordenes[index].cliente.nombre}`);
  }

  eliminarOrden(index: number): void {
    if (confirm(`¿Eliminar la orden de ${this.ordenes[index].cliente.nombre}?`)) {
      this.ordenes.splice(index, 1);
    }
  }

  verOrden(index: number): void {
    this.ordenSeleccionada = this.ordenes[index];
    this.modalVisible = true;
  }

  cerrarModal(): void {
    this.modalVisible = false;
    this.ordenSeleccionada = null;
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