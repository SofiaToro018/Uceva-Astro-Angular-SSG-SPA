import { Component, inject, OnInit } from '@angular/core';
import { TeamTableComponent } from '../../components/team/team-table.component';
import { Teams } from '../../interfaces/team.interface';
import { TeamService } from '../../services/team/team.service';
import { State } from '../../interfaces/state.interface';
import { AlertComponent } from '../../components/alert/alert.component';

/**
 * Componente contenedor de la página de equipo.
 *
 * Se utiliza para gestionar y mostrar un listado de miembros del equipo
 * utilizando el componente `TeamTableComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `TeamService`
 * para obtener los miembros del equipo y pasarlos al componente de tabla.
 * Forma parte de la capa de presentación de la aplicación.
 */
@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  imports: [TeamTableComponent, AlertComponent],
})
export class TeamPage implements OnInit {
  /**
   * Listado de miembros del equipo obtenidos desde el servicio.
   * @type {Teams[]}
   */
  team: Teams[] = [];
  /**
   * Estado actual del componente.
   *
   * @default 'init'
   */
  state: State = 'init';
  /**
   * Servicio para obtener miembros del equipo.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */

  private teamService = inject(TeamService);
  /**
   * Inicializa el componente y carga los miembros del equipo.
   * @remarks 
   * Se suscribe al método `getAllTeams()` del servicio y
   * asigna los datos recibidos a la propiedad `team`.
   */

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