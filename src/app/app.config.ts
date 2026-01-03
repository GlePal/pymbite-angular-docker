import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

// Importamos el servicio real y el mock
import { OrdenesService } from './sections/ordenes/services/ordenes.service';
import { OrdenesServiceMock } from './sections/ordenes/services/ordenes.service.mock';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),

    // ✅ sustituimos el servicio real por el mock
    { provide: OrdenesService, useClass: OrdenesServiceMock }
  ],
};