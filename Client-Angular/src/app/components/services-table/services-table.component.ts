import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { ServiceCategory, Service } from '../../interfaces/service.interface';


/**
 * Componente de tabla de servicios que se ofrecen.
 *
 * Se utiliza para mostrar un listado de servicios en una tabla,
 * mostrando información como nombre, categoría, precio y un badge
 * visual que indica la categoría de cada servicio.
 *
 * @remarks
 * Este componente recibe los servicios desde un componente padre
 * a través del Input `services` y utiliza el mapeo `categoryMap`
 * para asignar colores a los badges según la categoría.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-services-table [services]="servicesList"></app-services-table>
 * ```
 */
@Component({
  selector: 'app-services-table',
  imports: [CommonModule, BadgeAtom],
  templateUrl: './services-table.component.html',

})
export class ServicesTableComponent {
  /**
   * Listado de servicios que se mostrarán en la tabla.
   * @type {Service[]}
   * @remarks
   * Este Input permite pasar un array de servicios desde un componente padre,
   * generalmente `ListServicesComponent`. Cada servicio debe cumplir la interfaz `Service`.
   */
  @Input() services: Service[] = [];
  /**
   * Mapeo de categorías de servicios a tipos de Badge.
   * @type {Record<ServiceCategory, BadgeType>}
   * @remarks
   * Se utiliza para asignar colores de badges a cada categoría:
   * - 'Sistemas' → 'danger' (rojo)
   * - 'Software' → 'warning' (amarillo)  
   * - 'Diseño' → 'primary' (azul)
   * - 'Infraestructura' → 'success' (verde)
   * Esto permite que en la tabla cada servicio tenga un badge visual que indique su categoría
   * de forma clara para el usuario.
   */
  categoryMap: Record<ServiceCategory, BadgeType> = {
    'Sistemas' : 'danger',
    'Software': 'warning',
    'Diseño': 'primary',
    'Infraestructura': 'success'
  }
}
