import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactFormComponent } from './contacto-form.component';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactFormComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deberia crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('deberia renderizar un formulario con tres campos', () => {
    const nativeElement = fixture.nativeElement as HTMLElement;

    const form = nativeElement.querySelector('form');
    const nameInput = nativeElement.querySelector('#name');
    const emailInput = nativeElement.querySelector('#email');
    const messageTextarea = nativeElement.querySelector('#message');

    expect(form).toBeTruthy();
    expect(nameInput).toBeTruthy();
    expect(emailInput).toBeTruthy();
    expect(messageTextarea).toBeTruthy();
  });

  it('deberia renderizar el boton de envio con tipo button', () => {
    const nativeElement = fixture.nativeElement as HTMLElement;
    const button = nativeElement.querySelector('button');

    expect(button).toBeTruthy();
    expect(button?.getAttribute('type')).toBe('button');
    expect(button?.textContent).toContain('Enviar Solicitud');
  });
});
