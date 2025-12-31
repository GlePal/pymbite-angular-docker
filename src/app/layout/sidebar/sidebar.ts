import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

interface RouteItem {
  icon: string;
  label: string;
  aria: string;
  path: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css'],
})
export class Sidebar {
  private router = inject(Router);

  @Input() mode: 'routes' | 'dashboard' = 'routes';

  routeItems: RouteItem[] = [
    { icon: '🏠', label: 'Inicio', aria: 'Ir a Inicio', path: '/inicio' },
    { icon: '📊', label: 'Panel', aria: 'Ir a Panel de control', path: '/panel-control' },
    { icon: '📑', label: 'Órdenes', aria: 'Ir a Órdenes', path: '/ordenes' },
    { icon: '💻', label: 'Equipos', aria: 'Ir a Equipos', path: '/equipos' },
    { icon: '🛠️', label: 'Reparaciones', aria: 'Ir a Gestión de Reparaciones', path: '/gestion-reparaciones' },
    { icon: '📦', label: 'Inventario', aria: 'Ir a Inventario', path: '/inventario' },
    { icon: '🧭', label: 'Dashboard', aria: 'Ir a Dashboard con scroll', path: '/dashboard' },
  ];
}