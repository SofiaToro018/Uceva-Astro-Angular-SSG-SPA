import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamPage } from './team.page';
import { TeamService } from '../../services/team/team.service';
import { provideHttpClient } from '@angular/common/http';
import { TeamTableComponent } from '../../components/team/team-table.component';
import { TEAMS_MOCK } from '../../mocks/team.mocks';
import { of, throwError } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('TeamPage', () => {
  let component: TeamPage;
  let fixture: ComponentFixture<TeamPage>;
  let teamService: TeamService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamPage, TeamTableComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamPage);
    component = fixture.componentInstance;
    teamService = TestBed.inject(TeamService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllTeams al iniciar', () => {
    const spyGetAllTeams = jest.spyOn(teamService, 'getAllTeams').mockReturnValue(of(TEAMS_MOCK));
    fixture.detectChanges();
    expect(spyGetAllTeams).toHaveBeenCalled();
  });
  it('debería asignar los equipos recibidos del servicio', () => {
    jest.spyOn(teamService, 'getAllTeams').mockReturnValue(of(TEAMS_MOCK));
    fixture.detectChanges();
    expect(component.team).toEqual(TEAMS_MOCK);
  });
  
  it('deberia de pasar los equipos al componente team-table', () => {
    jest.spyOn(teamService, 'getAllTeams').mockReturnValue(of(TEAMS_MOCK));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(TeamTableComponent))
      .componentInstance;
    expect(tableComponent.team).toEqual(TEAMS_MOCK);
  });
  it('debería manejar el error cuando falla getAllTeams', () => {
    component.team = [];
    const errorResponse = new Error('Error al cargar equipos');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(teamService, 'getAllTeams').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(teamService.getAllTeams).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.team.length).toBe(0);
  });
 
});
