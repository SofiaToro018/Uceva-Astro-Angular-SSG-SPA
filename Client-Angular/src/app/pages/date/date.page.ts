import { Component } from '@angular/core';
import { BadgeAtom } from '@brejcha13320/design-system-bootstrap';
/**
 * Componente de página que muestra la fecha actual.
 * 
 * Este componente es parte de la aplicación Angular y se encarga de mostrar la fecha actual del sistema utilizando el componente BadgeAtom para resaltar la información.
 * 
 * @component
 * @selector 'app-date.page'
 * @templateUrl './date.page.html'
 * @imports [BadgeAtom]
 * @description Este componente se utiliza para demostrar el uso de componentes atómicos (BadgeAtom) dentro de una página Angular, mostrando la fecha actual de manera destacada. 
 */
@Component({
  selector: 'app-date.page',
  imports: [BadgeAtom],
  templateUrl: './date.page.html',
})
export class DatePage {

  /**
   * Obtiene la fecha actual del sistema
   */
  currentDate = new Date();

}
