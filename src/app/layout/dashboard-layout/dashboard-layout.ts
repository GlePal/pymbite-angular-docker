import { Component, AfterViewInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// ✅ Importa todos los componentes standalone que usas en el HTML
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
    // ✅ Scroll automático al fragmento
    this.route.fragment.subscribe(frag => {
      if (frag) {
        const el = document.getElementById(frag);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        const inicio = document.getElementById('inicio');
        if (inicio) inicio.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });

// ✅ Scrollspy con IntersectionObserver
const sections = document.querySelectorAll('section[id]');
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const link = document.querySelector(`a[fragment="${id}"]`);

      if (entry.isIntersecting) {
        // Marca el enlace activo
        document.querySelectorAll('a[fragment]').forEach(el => el.classList.remove('active-link'));
        link?.classList.add('active-link');

        // ➕ Hace visible la sección con animación
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.6 }
);

sections.forEach(section => observer.observe(section));

  }
}