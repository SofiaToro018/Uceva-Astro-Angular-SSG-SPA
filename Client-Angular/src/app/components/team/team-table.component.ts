import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { Teams } from '../../interfaces/team.interface';

/**
 * Componente de tabla de equipo de trabajo.
 *
 * Renderiza la información profesional de los integrantes del equipo.
 *
 * @remarks
 * Utiliza el `BadgeAtom` para destacar el rol de cada integrante
 * facilitando la identificación visual de cargos.
 */
@Component({
  selector: 'app-team-table',
  templateUrl: './team-table.component.html',
  standalone: true,
  imports: [BadgeAtom],
})
export class TeamTableComponent {
  /** Arreglo de miembros del equipo */
  @Input() team: Teams[] = [];

  /**
   * Mapeo de roles profesionales a estilos de Badge.
   */
  roleMap: Record<string, BadgeType> = {
    "Project Manager": "primary",
    "Frontend Developer": "warning",
    "Backend Developer": "success",
    "UI/UX Designer": "info",
    "QA Engineer": "secondary",
  };
}