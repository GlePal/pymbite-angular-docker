import { Component } from '@angular/core';

/**
 * Estructura de cada ítem del menú lateral.
 */
interface Section {
  icon: string;   // Ícono del item
  label: string;  // Texto del item
  anchor: string; // ID de la sección destino
  aria: string;   // Texto accesible
}

/**
 * Sidebar:
 * - Colapsado (w-16) por defecto; expandido (w-64) en hover del contenedor group.
 * - z-index alto para quedar por encima del contenido.
 * - Control de overflow para que nada se salga al estar colapsado.
 */
@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  sections: Section[] = [
    { icon: '🏠', label: 'Inicio', anchor: 'inicio', aria: 'Ir a Inicio' },
    { icon: '📊', label: 'Panel de control', anchor: 'panel-control', aria: 'Ir al Panel de control' },
    { icon: '🛠️', label: 'Órdenes', anchor: 'ordenes', aria: 'Ir a Órdenes' },
    { icon: '💻', label: 'Equipos', anchor: 'equipos', aria: 'Ir a Equipos' },
    { icon: '📋', label: 'Gestión de Reparaciones', anchor: 'gestion-reparaciones', aria: 'Ir a Gestión de Reparaciones' },
    { icon: '📦', label: 'Inventario', anchor: 'inventario', aria: 'Ir a Inventario' },
  ];

  // Scroll suave al hacer clic en el ítem
  scrollTo(anchor: string) {
    const el = document.getElementById(anchor);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}