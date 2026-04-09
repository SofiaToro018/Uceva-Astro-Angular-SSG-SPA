import type { Service } from '../interfaces/service.interface';

/**
 * Listado de servicios disponibles en el sistema.
 *
 * Esta constante simula una fuente de datos (mock) que representa
 * información básica de servicios, utilizada para:
 * - Pruebas unitarias
 * - Desarrollo sin backend
 * - Ejercicios académicos
 * 
 * @type {Service[]}
 * */
export const SERVICES: Service[] = [
  {
    id: 1,
    name: 'Consultoría Tecnológica',
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
 {  id: 3,
    name: 'Diseño Gráfico',
    description: 'Servicios de diseño gráfico para crear identidad visual atractiva.',
    category: 'Diseño',
    price: 200000
 },
 {
    id: 4,
    name: 'Infraestructura TI',
    description: 'Implementación y mantenimiento de infraestructura tecnológica robusta.',
    category: 'Infraestructura',
    price: 250000
 }

];