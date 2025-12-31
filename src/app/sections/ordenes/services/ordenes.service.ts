// Servicio para gestionar las órdenes.
// Se encarga de conectarse al backend (API REST) y devolver datos tipados con la interfaz Orden.

import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// ✅ Importamos la interfaz Orden para tipar los datos que maneja el servicio
import { Orden } from '../models/orden.interface';

// ✅ Importamos la URL base desde environments (buena práctica)
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root', // El servicio estará disponible en toda la aplicación
})
export class OrdenesService {
  // ✅ Inyectamos HttpClient usando la nueva API de Angular 20
  private http = inject(HttpClient);

  // URL base de la API (ejemplo: https://api.midominio.com/ordenes)
  private readonly baseUrl = `${environment.apiUrl}/ordenes`;

  // Obtener todas las órdenes
  getOrdenes(): Observable<Orden[]> {
    return this.http.get<Orden[]>(this.baseUrl);
  }

  // Crear una nueva orden
  createOrden(payload: Orden): Observable<Orden> {
    return this.http.post<Orden>(this.baseUrl, payload);
  }

  // Actualizar una orden existente
  updateOrden(id: string, payload: Partial<Orden>): Observable<Orden> {
    return this.http.put<Orden>(`${this.baseUrl}/${id}`, payload);
  }

  // Eliminar una orden
  deleteOrden(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}