import { Service } from "../interfaces/service.interface";
/**
 * Listado de servicios que ofrece el equipo de ejemplo para pruebas y desarrollo.
 * Estos datos se utilizan para simular la respuesta de una API o para pruebas unitarias en la aplicación Angular.
 * Cada servicio tiene un id, nombre, descripción y precio.
 * @remarks
 * Este mock de servicios es útil para el desarrollo de componentes que requieren datos
 *  de servicios sin necesidad de conectarse a una API real, facilitando así el proceso 
 * de desarrollo y pruebas.
 * 
 * @type {Service[]}
 * @example
 * ```typescript
 * import { SERVICES_MOCK } from './mocks/services.mocks';
 * console.log(SERVICES_MOCK);
 * // Output:
 * [
 *   {
 *     id: 1,
 *    name: 'Consultoria tecnológica',
 *    description: 'Asesoría especializada en tecnología para optimizar procesos empresariales.',
 *    category: 'Sistemas',
 *    price: 150000,
 *  },
 * {
 *    id: 2,
 *   name: 'Desarrollo web',
 *   description: 'Desarrollo de aplicaciones web modernas',
 *   category: 'Software',
 *   price: 300000,
 * },
 * 
 * ]
 * ```
 * 
 */
export const SERVICES_MOCK: Service[] = [
    {
    id: 1,
    name: 'Consultoría T',
    description: 'Asesoría especializada en tecnología para optimizar procesos empresariales.',
    category: 'Sistemas',
    price: 150000
 },
 {  id: 2,
    name: 'Desarrollo Web',
    description: 'Creación de sitios web personalizados y adaptativos para mejorar la presencia en línea.',
    category: 'Software',
    price: 300000
 },
];