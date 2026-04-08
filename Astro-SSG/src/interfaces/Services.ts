/**
 * Interfaz que representa un servicio ofrecido por la organización.
 * * Contiene la información descriptiva necesaria para listar los servicios
 * en la plataforma.
 * * @remarks
 * Cada servicio incluye un identificador, nombre descriptivo y una categoría
 * que ayuda a la oferta comercial.
 * * @example
 * ```ts
 * const servicio: Service = {
 * id: 1,
 * name: 'Consultoría Tech',
 * description: 'Asesoría en transformación digital',
 * category: 'Sistemas'
 * };
 * ```
 */
export interface Service {
  /** Identificador único del servicio */
  id: number;

  /** Nombre o título del servicio */
  name: string;

  /** Descripción detallada de lo que incluye el servicio */
  description: string;

  /** Precio del servicio en moneda local (COP) */
  price: number;

  /** Categoría a la que pertenece el servicio */
  category: ServiceCategory;
}

/**
 * Tipo que define las categorías permitidas para los servicios.
 * * @remarks
 * Restringe los valores a las áreas principales de la empresa.
 */
export type ServiceCategory = 'Sistemas' | 'Software' | 'Diseño' | 'Infraestructura';