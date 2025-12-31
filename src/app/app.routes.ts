import { Routes } from '@angular/router';
import { DashboardLayout } from './layout/dashboard-layout/dashboard-layout';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // ✅ arranca en dashboard
  { path: 'dashboard', component: DashboardLayout },
  { path: 'ordenes', loadComponent: () => import('./sections/ordenes/ordenes').then(m => m.Ordenes) },
  { path: 'equipos', loadComponent: () => import('./sections/equipos/equipos').then(m => m.Equipos) },
  { path: 'gestion-reparaciones', loadComponent: () => import('./sections/gestion-reparaciones/gestion-reparaciones').then(m => m.GestionReparaciones) },
  { path: 'inventario', loadComponent: () => import('./sections/inventario/inventario').then(m => m.Inventario) },
];