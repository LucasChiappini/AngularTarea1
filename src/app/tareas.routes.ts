import { Routes } from '@angular/router';

export const tareasRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'Tareas',
    loadComponent: () => import('./pages/tareas/tareas-listar/tareas-listar.page'),
  },
  {
    path: 'create',
    title: 'Crear tarea',
    loadComponent: () => import('./pages/tareas/tareas-crear/tareas-crear.page'),
  },
  {
    path: ':id_tarea',
    title: 'Editar tarea',
    loadComponent: () => import('./pages/tareas/tareas-editar/tareas-editar.page'),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

export default tareasRoutes;
