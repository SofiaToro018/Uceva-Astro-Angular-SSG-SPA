import type { Teams } from "../interfaces/team.interface";

/**
 * Listado de miembros del equipo de trabajo.
 * Esta constante representa un conjunto de datos de prueba (mock)
 * que simula la respuesta de un backend REST.
 * Se utiliza principalmente para:
 * - Pruebas unitarias
 * - Prácticas de componentes   
 * - Ejercicios de arquitectura modular
 * 
 * @type {Teams[]}
 */
export const TEAM: Teams[] = [
 {
    id : 1,
    name : 'Carlos Ramírez',
    role : 'Project Manager',
    email : 'carlos.ramirez@gmail.com'
 },
 {
    id : 2,
    name : 'Ana Gómez',
    role : 'Frontend Developer',
    email : 'ana.gomez@gmail.com'
 },
 {
    id : 3,
    name : 'Luis Martínez',
    role : 'Backend Developer',
    email : 'luis.martinez@gmail.com'
 },
 {
    id : 4,
    name : 'María López',
    role : 'UI/UX Designer',
    email : 'maria.lopez@gmail.com' 
 },
 {
    id : 5,
    name : 'Jorge Fernández',
    role : 'QA Engineer',
    email : 'jorge.fernandez@gmail.com'
 }

];

