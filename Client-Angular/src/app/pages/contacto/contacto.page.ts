import { Component } from '@angular/core';
import { ContactFormComponent } from '../../components/contacto-form/contacto-form.component'; // Asegúrate de que la ruta sea correcta
/**
 * Componente de página para la sección de contacto.
 * 
 * Este componente sirve como contenedor para el formulario de contacto, utilizando el componente `ContactFormComponent` para mostrar el formulario y gestionar la interacción del usuario.
 * 
 * @component
 * @selector 'app-contact-page'
 * @templateUrl './contacto.page.html'
 * @imports [ContactFormComponent]
 * @description Este componente se utiliza para mostrar un formulario de contacto en la aplicación Angular, permitiendo a los usuarios enviar consultas o mensajes a través del formulario proporcionado por el `ContactFormComponent`.
 * 
 */
@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ContactFormComponent], // Importamos el componente hijo
  templateUrl: './contacto.page.html'
})

/**
 * Clase del componente de página de contacto.
 * 
 * Esta clase no contiene lógica adicional, ya que el formulario de contacto 
 * se maneja completamente dentro del `ContactFormComponent`. 
 * El propósito principal de esta clase es servir como contenedor para el formulario y 
 * facilitar su inclusión en la estructura de la aplicación.
 */
export class ContactPageComponent {}