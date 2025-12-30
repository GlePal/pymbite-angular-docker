// gestion-reparaciones.ts
// Componente standalone para el módulo de Gestión de Reparaciones.
// Renderiza la tabla de órdenes con filtros, badges y animación del título.

import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type Orden = {
  cliente: { nombre: string; telefono: string; direccion: string };
  dispositivo: {
    tipo: string; marca: string; modelo: string; accesorios: string;
    condiciones: string; descripcionAdicional: string;
  };
  informacion: {
    falla: string; diagnostico: string; estado: 'Recibido' | 'En proceso' | 'Finalizado' | '';
    prioridad: 'Alta' | 'Media' | 'Baja' | ''; fechaIngreso: string; fechaEntrega: string; fechaFinalizacion: string;
  };
  costos: { presupuesto: string; costoFinal: number; formaPago: string; autorizacion: boolean };
  seguimiento: { notasInternas: string; historial: string };
};

@Component({
  selector: 'app-gestion-reparaciones',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gestion-reparaciones.html',
  styleUrl: './gestion-reparaciones.css',
})
export class GestionReparaciones {
  // Estado para activar la animación del título cuando entra al viewport
  tituloVisible = false;

  // Filtros vinculados por ngModel (template-driven) para busqueda rápida
  estadoFiltro: Orden['informacion']['estado'] | '' = '';
  prioridadFiltro: Orden['informacion']['prioridad'] | '' = '';
  clienteFiltro = '';

  // Fuente de datos (ejemplo). En producción, se debe inyectar un servicio que las provea.
  ordenes: Orden[] = [
    {
      cliente: { nombre: 'Juan Pérez', telefono: '0412-5551234', direccion: 'Av. Principal, Torre A' },
      dispositivo: { tipo: 'Smartphone', marca: 'Apple', modelo: 'iPhone 13', accesorios: 'Cargador', condiciones: 'Golpe lateral', descripcionAdicional: 'Pantalla con rayas' },
      informacion: { falla: 'No enciende', diagnostico: 'Posible daño de batería', estado: 'En proceso', prioridad: 'Alta', fechaIngreso: '2025-12-28', fechaEntrega: '2025-12-31', fechaFinalizacion: '' },
      costos: { presupuesto: '120', costoFinal: 0, formaPago: 'Dólares', autorizacion: true },
      seguimiento: { notasInternas: 'Requiere repuesto', historial: '2025-12-29: Diagnóstico inicial' },
    },
    {
      cliente: { nombre: 'María García', telefono: '0414-7772233', direccion: 'Calle 10, Edif. Sol' },
      dispositivo: { tipo: 'Laptop', marca: 'Dell', modelo: 'XPS 13', accesorios: 'Sin accesorios', condiciones: 'Buen estado', descripcionAdicional: '' },
      informacion: { falla: 'Sobrecalentamiento', diagnostico: 'Falla de ventilador', estado: 'Recibido', prioridad: 'Media', fechaIngreso: '2025-12-27', fechaEntrega: '', fechaFinalizacion: '' },
      costos: { presupuesto: '80', costoFinal: 0, formaPago: 'Bolívares', autorizacion: false },
      seguimiento: { notasInternas: 'Esperando aprobación', historial: '2025-12-27: Ingresada' },
    },
    {
      cliente: { nombre: 'Carlos Torres', telefono: '0416-3334455', direccion: 'Urbanización Las Palmas' },
      dispositivo: { tipo: 'Tablet', marca: 'Samsung', modelo: 'Tab S7', accesorios: 'Funda', condiciones: 'Leve desgaste', descripcionAdicional: 'Puerto USB suelto' },
      informacion: { falla: 'No carga', diagnostico: 'Puerto dañado', estado: 'Finalizado', prioridad: 'Baja', fechaIngreso: '2025-12-15', fechaEntrega: '2025-12-20', fechaFinalizacion: '2025-12-19' },
      costos: { presupuesto: '50', costoFinal: 60, formaPago: 'Dólares', autorizacion: true },
      seguimiento: { notasInternas: 'Entregado al cliente', historial: '2025-12-19: Reparación completa' },
    },
  ];

  // Getter que aplica los filtros sobre la lista original (se recalcula al cambiar ngModel)
  get ordenesFiltradas(): Orden[] {
    const clienteTerm = this.clienteFiltro.trim().toLowerCase();
    return this.ordenes.filter((o) => {
      const estadoOK = this.estadoFiltro ? o.informacion.estado === this.estadoFiltro : true;
      const prioridadOK = this.prioridadFiltro ? o.informacion.prioridad === this.prioridadFiltro : true;
      const clienteOK = clienteTerm ? o.cliente.nombre.toLowerCase().includes(clienteTerm) : true;
      return estadoOK && prioridadOK && clienteOK;
    });
  }

  // Acciones de fila (placeholder). En integración real, navegaría/abriría modal/servicio.
  editarOrden(index: number): void {
    const orden = this.ordenes[index];
    console.log('Editar orden:', orden);
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
    console.log('Imprimir orden:', orden);
    alert(`Imprimiendo orden de ${orden.cliente.nombre}`);
  }

  // Listener de scroll para activar animación del título al entrar en viewport
  @HostListener('window:scroll', [])
  onScroll(): void {
    const titulo = document.getElementById('titulo');
    if (!titulo) return;

    const rect = titulo.getBoundingClientRect();
    const visible = rect.top < window.innerHeight && rect.bottom > 0;
    if (visible) {
      // Agrega la clase solo una vez para evitar reflows continuos
      if (!this.tituloVisible) {
        this.tituloVisible = true;
        titulo.classList.add('titulo-visible');
      }
    }
  }

  // Activar animación si ya está visible al arrancar (por ejemplo, en pantallas pequeñas)
  ngAfterViewInit(): void {
    this.onScroll();
  }
}