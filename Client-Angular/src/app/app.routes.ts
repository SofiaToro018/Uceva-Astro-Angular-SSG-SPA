import { Routes } from '@angular/router';
import { DatePage } from './pages/date/date.page';
import { ProductsPage } from './pages/products/products.page';
import { UsersPage } from './pages/users/users.page';
import { TeamPage } from './pages/team/team.page';
import { ServicesPage } from './pages/servics/services.page';

/**
 * Definición de las rutas principales de la aplicación.
 *
 * @remarks
 * Este archivo contiene la configuración de enrutamiento
 * utilizada por Angular Router para mapear las URLs
 * a los componentes correspondientes.
 *
 * Incluye:
 * - Rutas de navegación principales
 * - Redirección por defecto para rutas no existentes
 *
 * @see {@link UsersPage}
 * @see {@link ProductsPage}
 * @see {@link TeamPage}
 */
export const routes: Routes = [

  /**
   * Ruta de usuarios.
   *
   * @remarks
   * Renderiza el componente `UsersPage`, encargado
   * de mostrar y gestionar el listado de usuarios.
   */
  { path: 'users', component: UsersPage },

  /**
   * Ruta de productos.
   *
   * @remarks
   * Renderiza el componente `ProductsPage`, encargado
   * de mostrar y gestionar el listado de productos.
   */
  { path: 'products', component: ProductsPage },

  /**
   * Ruta de la fecha.
   *
   * @remarks
   * Renderiza el componente `DatePage`, encargado
   * de mostrar la fecha actual del sistema.
   */
  { path: 'date', component: DatePage },
  /**
   * Ruta de Team.
   * 
   * @remarks
   * Renderiza el componente `TeamPage`, encargado de mostrar información sobre el equipo de trabajo.
   * Esta ruta se agregó recientemente para incluir la nueva página del equipo en la navegación de la aplicación.
   * Actualmente, el componente `TeamPage` se encuentra en desarrollo y se espera que esté disponible en la próxima versión de la aplicación.
   * 
   */
  { path: 'team', component: TeamPage },
  /**
   * Ruta de servicios.
   * 
   * @remarks 
   * Renderiza el componente `ServicesPage`, encargado de mostrar y gestionar el listado de servicios ofrecidos.
   * Esta ruta se agregó recientemente para incluir la nueva página de servicios en la navegación de la aplicación.
   * Actualmente, el componente `ServicesPage` se encuentra en desarrollo y se espera que esté disponible en la próxima versión de la aplicación.
   * 
   */ 
  { path: 'services', component: ServicesPage },
  /**
   * Ruta comodín.
   *
   * @remarks
   * Captura cualquier ruta no definida y redirige
   * automáticamente a la ruta de usuarios.
   */
  { path: '**', redirectTo: 'users' },
];