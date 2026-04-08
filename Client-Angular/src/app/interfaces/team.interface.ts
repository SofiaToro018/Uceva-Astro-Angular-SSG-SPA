/**
 * Interfaz que representa a un miembro del equipo de trabajo.
 * * Se utiliza para mostrar el perfil profesional de los colaboradores
 * en la sección de "Nosotros" o "Equipo".
 * * @remarks
 * Incluye datos de contacto y el rol específico que desempeña en la organización.
 * * @example
 * ```ts
 * const integrante: Teams = {
 * id: 1,
 * name: 'Ana Gómez',
 * role: 'Frontend Developer',
 * email: 'ana.gomez@empresa.com'
 * };
 * ```
 */
export interface Teams {
  /** Identificador único del colaborador */
  id: number;

  /** Nombre completo del integrante */
  name: string;

  /** Cargo o posición jerárquica */
  role: string;

  /** Correo electrónico corporativo */
  email: string;
}