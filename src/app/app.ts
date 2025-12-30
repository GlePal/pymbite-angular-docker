import { Component, signal } from '@angular/core';

// Layout
import { Sidebar } from './layout/sidebar/sidebar';
import { Footer } from './layout/footer/footer';

// Secciones
import { Inicio } from './sections/inicio/inicio';
import { PanelControl } from './sections/panel-control/panel-control';
import { Ordenes } from './sections/ordenes/ordenes';
import { Equipos } from './sections/equipos/equipos';
import { GestionReparaciones } from './sections/gestion-reparaciones/gestion-reparaciones';
import { Inventario } from './sections/inventario/inventario';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Sidebar,
    Footer,
    Inicio,
    PanelControl,
    Ordenes,
    Equipos,
    GestionReparaciones,
    Inventario,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('pymbite');

  // Estado reactivo del sidebar (abierto/cerrado)
  isSidebarOpen = signal(false);

  // Métodos para abrir/cerrar el sidebar
  openSidebar() {
    this.isSidebarOpen.set(true);
  }

  closeSidebar() {
    this.isSidebarOpen.set(false);
  }
}