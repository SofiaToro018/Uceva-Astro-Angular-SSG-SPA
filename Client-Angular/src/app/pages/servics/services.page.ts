import { Component } from '@angular/core';
import { AlertComponent } from '../../components/alert/alert.component';
import { Service } from '../../interfaces/service.interface';
import { State } from '../../interfaces/state.interface';
import { State } from '../../interfaces/state.interface';

/**
 * Componente contenedor de servicios.
 *
 * Se utiliza para gestionar y mostrar un listado de servicios
 * utilizando el componente `ServicesTableComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `ServicesService`
 * para obtener los servicios y pasarlos al componente de tabla.
 * Forma parte de la capa de presentación de la aplicación.
 *
 */
@Component({
  selector: 'app-services',
  imports: [ServicesTableComponent, AlertComponent],
  templateUrl: './services.page.html',

})
export class ServicesPage {
/**
 * Listado de servicios obtenidos desde el servicio.
 * @type {Service[]}
 */
services: Service[] = [];
/**     
 * Estado actual del componente.
 *
 * @default 'init'
 */
    state: State = 'init';

/**
 * Servicio para obtener servicios.
 * @remarks
 * Se inyecta utilizando la función `inject()` de Angular.
 */
// private servicesService = inject(ServicesService); 
 
/**
 * Inicializa el componente y carga los servicios.
 * @remarks   
 * Se suscribe al método `getAllServices()` del servicio y
 * asigna los datos recibidos a la propiedad `services`.
 */
ngOnInit(): void {
  this.state = 'loading';
  // this.servicesService.getAllServices().subscribe({
  //   next: (services) => {
  //     this.services = services;
  //     this.state = 'success';
  //   },
  //   error: (error) => {
  //     console.error(error)
  //     this.state = 'error';
  //   }
  // });
 
}
