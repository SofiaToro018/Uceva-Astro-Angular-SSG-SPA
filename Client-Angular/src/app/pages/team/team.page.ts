import { Component, inject, OnInit } from '@angular/core';
import { TeamTableComponent } from '../../components/team/team-table.component';
import { Teams } from '../../interfaces/team.interface';
import { TeamService } from '../../services/team/team.service';
import { State } from '../../interfaces/state.interface';
import { AlertComponent } from '../../components/alert/alert.component';

/**
 * Componente contenedor de la página de equipo.
 *
 * @remarks
 * Consume el TeamService para poblar el organismo TeamTableComponent.
 */
@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  imports: [TeamTableComponent, AlertComponent],
})
export class TeamPage implements OnInit {
  team: Teams[] = [];
  state: State = 'init';

  private teamService = inject(TeamService);

  ngOnInit(): void {
    this.state = 'loading';
    this.teamService.getAllTeams().subscribe({
      next: (data) => {
        this.team = data;
        this.state = 'success';
      },
      error: (err) => {
        console.error(err);
        this.state = 'error';
      }
    });
  }
}