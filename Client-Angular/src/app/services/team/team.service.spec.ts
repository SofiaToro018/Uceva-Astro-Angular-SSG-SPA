import { TestBed } from '@angular/core/testing';
import { TeamService } from './team.service';
import { TEAM } from '../../data/team.interface';

describe('TeamService', () => {
  let service: TeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamService);
  });

  describe('Creación del servicio', () => {

    it('debería crearse correctamente', () => {
      expect(service).toBeTruthy();
    });

    it('getAllTeams debería retornar un observable con los usuarios', (done) => {
      service.getAllTeams().subscribe(teams => {
        expect(teams).toEqual(TEAM);
        expect(teams.length).toBe(TEAM.length);
        done();
      });
    });

  });
  
});