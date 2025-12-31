import { Routes } from '@angular/router';
import { Inicio } from './sections/inicio/inicio';
import { PanelControl } from './sections/panel-control/panel-control';
import { Ordenes } from './sections/ordenes/ordenes';
import { Equipos } from './sections/equipos/equipos';
import { GestionReparaciones } from './sections/gestion-reparaciones/gestion-reparaciones';
import { Inventario } from './sections/inventario/inventario';
import { DashboardLayout } from './layout/dashboard-layout/dashboard-layout';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: Inicio },
  { path: 'panel-control', component: PanelControl },
  { path: 'ordenes', component: Ordenes },
  { path: 'equipos', component: Equipos },
  { path: 'gestion-reparaciones', component: GestionReparaciones },
  { path: 'inventario', component: Inventario },
  { path: 'dashboard', component: DashboardLayout },
];