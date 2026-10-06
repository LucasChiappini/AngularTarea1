import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { ListarUsuariosPage } from './pages/usuarios/listar-usuarios/listar-usuarios.page';
import { Type } from '@angular/core';

export const routes: Routes = [
  { path: 'home', title: 'Home', component: HomePage },

  {
    path: 'usuarios',
    title: 'Usuarios',
    loadComponent: async function (): Promise<Type<ListarUsuariosPage>> {
      const modulePromise = import('./pages/usuarios/listar-usuarios/listar-usuarios.page');
      const module = await modulePromise;
      return module.ListarUsuariosPage;
    },
  },
  {
    path: 'usuarios/create',
    title: 'Crear usuario',
    loadComponent: async () => {
      const module = await import('./pages/usuarios/crear-usuario/crear-usuario.page');
      return module.CrearUsuarioPage;
    },
  },
  {
    path: 'tareas',
    loadChildren: () => import('./tareas.routes'),
  },
  {
    path: '**',
    loadComponent: async () => (await import('./pages/not-found/not-found.page')).NotFoundPage,
  },
];
