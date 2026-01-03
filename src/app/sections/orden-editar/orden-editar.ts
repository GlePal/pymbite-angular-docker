/**
 * Archivo: orden-editar.ts
 * Angular 20 standalone + Tailwind
 *
 * Errores solucionados:
 * 3) @angular-eslint/prefer-inject -> Usamos inject() en vez de constructor injection.
 * 4) No suitable injection token... / This type does not have a value -> Importamos ActivatedRoute y usamos inject(ActivatedRoute).
 * 5) Cannot find name 'ActivatedRoute' -> Se importa desde '@angular/router'.
 *
 * También aseguramos que el template use 'ordenId' que sí existe.
 */

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// ActivatedRoute debe ser importado para que tenga "value" y sea token válido
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-orden-editar',
  standalone: true,
  // Importamos CommonModule, FormsModule y RouterModule para el template (inputs, routerLink, etc.)
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './orden-editar.html',
  styleUrls: ['./orden-editar.css'],
})
export class OrdenEditar {
  // Propiedad usada en el template (evita el error 2339)
  ordenId: string | null = null;

  // Preferimos inject() (regla prefer-inject) en lugar de constructor injection
  private route = inject(ActivatedRoute);

  constructor() {
    // Obtenemos el parámetro :id de la ruta y lo guardamos en la propiedad
    this.ordenId = this.route.snapshot.paramMap.get('id');
  }

  guardarCambios(): void {
    // Aquí conectarías con tu servicio real (updateOrden)
    alert(`Guardando cambios de la orden con ID: ${this.ordenId}`);
  }
}