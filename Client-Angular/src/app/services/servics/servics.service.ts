import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Service } from '../../interfaces/service.interface';
import { SERVICES } from '../../data/service.interface';

/**
 * Servicio encargado de la gestión de servicios.
 *
 * Proporciona métodos para obtener información de servicios
 * desde la data local.
 *
 * @example
 * ```ts
 * constructor(private servicesService: ServicesService) {}
 *
 * this.servicesService.getAllServices(10).subscribe(services => {
 *   console.log(services);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  /**
   * Obtiene una lista de servicios desde el backend.
   *
   * @param countServices Número de servicios a obtener.
   * @returns Observable que emite un array de servicios.
   *
   * @example
   * ```ts
   * this.servicesService.getAllServices().subscribe(services => {
   *   console.log(services);
   * });
   * ```
   */
  getAllServices(): Observable<Service[]> {
    return of(SERVICES);
  }
}
