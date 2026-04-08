import { Component } from '@angular/core';
/**
 * Componente de formulario de contacto.
 * Este componente es parte de la aplicación Angular y se encarga de mostrar un formulario de contacto para que los usuarios puedan enviar sus consultas o mensajes.
 * @component
 * @selector 'app-contact-form'
 * @templateUrl './contacto-form.component.html'
 * 
 * */

@Component({
  selector: 'app-contact-form',
  standalone: true,
  templateUrl: './contacto-form.component.html'
})
/**
 * Este componente se utiliza para demostrar la creación de un formulario de contacto en Angular.
 *  Actualmente, solo contiene la estructura básica del componente, pero se pueden agregar f
 * uncionalidades adicionales como validación de formularios, manejo de eventos y envío de datos 
 * a un backend en el futuro.
 */
export class ContactFormComponent {
  // Aquí iría la lógica del botón "Enviar" más adelante
}