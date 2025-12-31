import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface RouteItem {
  icon: string;
  label: string;
  aria: string;
  path: string;
  fragment: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css'],
})
export class Sidebar {
  // ✅ Restauramos el Input para que Angular reconozca la propiedad
  @Input() mode: 'routes' | 'dashboard' = 'dashboard';

  routeItems: RouteItem[] = [
    { icon: '🏠', label: 'Inicio', aria: 'Ir a Inicio', path: '/dashboard', fragment: 'inicio' },
    { icon: '📊', label: 'Panel', aria: 'Ir a Panel de control', path: '/dashboard', fragment: 'panel-control' },
    { icon: '📑', label: 'Órdenes', aria: 'Ir a Órdenes', path: '/dashboard', fragment: 'ordenes' },
    { icon: '💻', label: 'Equipos', aria: 'Ir a Equipos', path: '/dashboard', fragment: 'equipos' },
    { icon: '🛠️', label: 'Reparaciones', aria: 'Ir a Gestión de Reparaciones', path: '/dashboard', fragment: 'gestion-reparaciones' },
    { icon: '📦', label: 'Inventario', aria: 'Ir a Inventario', path: '/dashboard', fragment: 'inventario' },
  ];
}