import { Component } from '@angular/core';

/**
 * Componente Inicio:
 * - Hero principal de la aplicación.
 * - Contiene logo animado, título, subtítulo, botones y estadísticas.
 * - Standalone para integrarse directamente en App.
 */
@Component({
  selector: 'app-inicio',
  standalone: true,
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {}