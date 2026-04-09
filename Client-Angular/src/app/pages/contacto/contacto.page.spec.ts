import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPageComponent } from './contacto.page';

describe('ContactoPage', () => {
  let component: ContactPageComponent;
  let fixture: ComponentFixture<ContactPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('dbebería crear el componente', () => {
    expect(component).toBeTruthy();
    
  });
});
