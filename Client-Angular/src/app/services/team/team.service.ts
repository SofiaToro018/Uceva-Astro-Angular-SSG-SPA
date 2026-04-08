import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Teams } from '../../interfaces/team.interface';
import { TEAM } from '../../data/team.interface';

/**
 * Servicio encargado de la gestión de equipos.
 *
 * Proporciona métodos para obtener información de equipos
 * desde el data local.
 *
 * @example
 * ```ts
 * constructor(private teamService: TeamService) {}
 *
 * this.teamService.getAllTeams().subscribe(teams => {
 *   console.log(teams);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class TeamService {
  /**
   * Obtiene una lista de equipos desde el backend.
   *
   * @returns Observable que emite un array de equipos.
   *
   * @example
   * ```ts
   * this.teamService.getAllTeams(5).subscribe(teams => {
   *   console.log(teams);
   * });
   * ```
   */
  getAllTeams(): Observable<Teams[]> {
    return of(TEAM);
  }
}
