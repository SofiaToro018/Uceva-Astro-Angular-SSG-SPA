import { Component } from '@angular/core';
import { ContactFormComponent } from '../../components/contacto-form/contacto-form.component'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ContactFormComponent], // Importamos el componente hijo
  templateUrl: './contacto.page.html'
})
export class ContactPageComponent {}