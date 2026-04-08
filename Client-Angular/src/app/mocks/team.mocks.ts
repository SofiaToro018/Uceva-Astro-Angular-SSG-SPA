import { Teams } from "../interfaces/team.interface";

/**
 * Listado de personas de ejemplo para pruebas y desarrollo.
 * Estos datos se utilizan para simular la respuesta de una API o para pruebas unitarias en la aplicación Angular.
 * Cada persona del team tiene un id, nombre, rol y una lista de miembros.
 * La lista de miembros es un array de strings que representa los nombres de los integrantes del equipo.
 * 
 * @remarks
 * Este mock de personas es útil para el desarrollo de componentes que requieren datos
 * de personas sin necesidad de conectarse a una API real, facilitando así el proceso
 * de desarrollo y pruebas.
 * 
 * @type {Teams[]}
 * @example
 * ```typescript
 * import { TEAMS_MOCK } from './mocks/team.mocks';
 * console.log(TEAMS_MOCK);
 * // Output:
 * [
 *  {
 *   id: 1,
 * name: 'Carlos Ramírez',
 * rol : 'Desarrollador',
 * email : 'carlos.ramirez@example.com'
 * }
 * ]
 * ```  
 */
export const TEAMS_MOCK: Teams[] = [
    {
        id: 1,
        name: 'Carlos Ramírez',
        role: 'Project Manager',
        email: 'carlos.ramirez@example.com'
    },
    {
        id: 2,
        name: 'Ana Gómez',
        role: 'Frontend Developer',
        email: 'ana.gomez@example.com'
    }

];