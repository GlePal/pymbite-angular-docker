export type EstadoOrden = 'Recibido' | 'En proceso' | 'Finalizado';
export type PrioridadOrden = 'Alta' | 'Media' | 'Baja';

export interface Orden {
  id: string;

  cliente: {
    nombre: string;
    telefono: string;
    direccion: string;
  };
  dispositivo: {
    tipo: string;
    marca: string;
    modelo: string;
    accesorios: string;
    condiciones: string;
    descripcionAdicional: string;
  };
  informacion: {
    falla: string;
    diagnostico: string;
    estado: EstadoOrden;
    prioridad: PrioridadOrden;
    fechaIngreso: string;
    fechaEntrega: string;
    fechaFinalizacion: string;
  };
  costos: {
    presupuesto: string;
    costoFinal: number;
    formaPago: string;
    autorizacion: boolean;
  };
  seguimiento: {
    notasInternas: string;
    historial: string;
  };
}