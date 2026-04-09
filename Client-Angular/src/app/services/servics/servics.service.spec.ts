import { TestBed } from '@angular/core/testing';
import { ServicesService } from './servics.service';
import { SERVICES } from '../../data/service.interface';

describe('ServicesService', () => {
  let service: ServicesService;

    beforeEach(() => {  
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesService);
  });

    describe('Creación del servicio', () => {

    it('debería crearse correctamente', () => {
      expect(service).toBeTruthy();
    });

    it('getAllServices debería retornar un observable con los servicios', (done) => {
      service.getAllServices().subscribe(services => {
        expect(services).toEqual(SERVICES);
        expect(services.length).toBe(SERVICES.length);
        done();
     });
    });

  });

});
