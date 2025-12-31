import { Component, AfterViewInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Sidebar } from '../sidebar/sidebar';
import { Inicio } from '../../sections/inicio/inicio';
import { PanelControl } from '../../sections/panel-control/panel-control';
import { Ordenes } from '../../sections/ordenes/ordenes';
import { Equipos } from '../../sections/equipos/equipos';
import { GestionReparaciones } from '../../sections/gestion-reparaciones/gestion-reparaciones';
import { Inventario } from '../../sections/inventario/inventario';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [
    Sidebar,
    Inicio,
    PanelControl,
    Ordenes,
    Equipos,
    GestionReparaciones,
    Inventario,
  ],
  templateUrl: './dashboard-layout.html',
  styleUrls: ['./dashboard-layout.css'],
})
export class DashboardLayout implements AfterViewInit {
  private route = inject(ActivatedRoute);

  ngAfterViewInit(): void {
    // ✅ Escuchar cambios de fragmento
    this.route.fragment.subscribe(frag => {
      if (frag) {
        const el = document.getElementById(frag);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        const inicio = document.getElementById('inicio');
        if (inicio) {
          inicio.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  }
}