import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamTableComponent } from './team-table.component';
import { By } from '@angular/platform-browser';
import { TEAMS_MOCK } from '../../mocks/team.mocks';

describe('TeamTableComponent', () => {
  let component: TeamTableComponent;
  let fixture: ComponentFixture<TeamTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deberia crear el componente', () => {
    expect(component).toBeTruthy();
  });
  
  it(('deberia renderizar una tabla'), () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });
  it(('deberia renderizar una fila por cada persona del team'), () => {
    component.team = TEAMS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.team.length);
  });

  it(('deberia mostrar los datos de la persona del team en cada columna'), () => {
    component.team = TEAMS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const teamMember = component.team[index];

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(teamMember.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(teamMember.name);
      expect(columns[2].nativeElement.textContent.trim()).toBe(teamMember.email);
      expect(columns[3].nativeElement.textContent.trim()).toBe(teamMember.role);
    });
  });

  it('deberia mapear cada rol a su BadgeType correcto', () => {
    expect(component.roleMap['Project Manager']).toBe('primary');
    expect(component.roleMap['Frontend Developer']).toBe('warning');
    expect(component.roleMap['Backend Developer']).toBe('success');
    expect(component.roleMap['UI/UX Designer']).toBe('info');
    expect(component.roleMap['QA Engineer']).toBe('secondary');
  });
});
