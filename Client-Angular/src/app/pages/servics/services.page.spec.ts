import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesPage } from './services.page';
import { ServicesService } from '../../services/servics/servics.service';
import { ServicesTableComponent } from '../../components/services-table/services-table.component';
import { provideHttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { By } from '@angular/platform-browser';
import { SERVICES_MOCK } from '../../mocks/services.mocks';


describe('ServicesPage', () => {
  let component: ServicesPage;
  let fixture: ComponentFixture<ServicesPage>;
  let servicesService: ServicesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesPage, ServicesTableComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesPage);
    component = fixture.componentInstance;
    servicesService = TestBed.inject(ServicesService);
  });
  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllServices al iniciar', () => {
    const spyGetAllServices = jest.spyOn(servicesService, 'getAllServices').mockReturnValue(of(SERVICES_MOCK));
    fixture.detectChanges();
    expect(spyGetAllServices).toHaveBeenCalled();
  });
  it('debería asignar los servicios recibidos del servicio', () => {
    jest.spyOn(servicesService, 'getAllServices').mockReturnValue(of(SERVICES_MOCK));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(ServicesTableComponent))
      .componentInstance;
    expect(tableComponent.services).toEqual(SERVICES_MOCK);   

  });

  it('debería manejar el error cuando falla getAllServices', () => {
    component.services = [];
    const errorResponse = new Error('Error al cargar servicios'); 

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(servicesService, 'getAllServices').mockReturnValue(throwError(() => errorResponse));
    fixture.detectChanges();

    expect(servicesService.getAllServices).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.services.length).toBe(0);
  });

});
