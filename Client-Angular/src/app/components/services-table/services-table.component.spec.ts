import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesTableComponent } from './services-table.component';
import { By } from '@angular/platform-browser';
import { SERVICES_MOCK } from '../../mocks/services.mocks';
import { CurrencyPipe } from '@angular/common';

describe('ServicesTableComponent', () => {
  let component: ServicesTableComponent;
  let fixture: ComponentFixture<ServicesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });
  
  it('debería renderizar una fila por cada servicio', () => {
    component.services = SERVICES_MOCK
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.services.length);
  });

  it('debería mostrar los datos del servicio en cada columna', () => {
    component.services = SERVICES_MOCK
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const service = component.services[index];
      const servicePrice = new CurrencyPipe('en-US').transform(service.price);

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(service.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(service.name);
      expect(columns[2].nativeElement.textContent.trim()).toBe(service.description);
      expect(columns[3].nativeElement.textContent.trim()).toBe(service.category);
      expect(columns[4].nativeElement.textContent.trim()).toBe(servicePrice);
    });
  });

  it('debería mapear cada categoría a su BadgeType correcto', () => {
    expect(component.categoryMap['Sistemas']).toBe('danger');
    expect(component.categoryMap['Software']).toBe('warning');
    expect(component.categoryMap['Diseño']).toBe('primary');
    expect(component.categoryMap['Infraestructura']).toBe('success');
  });
});
