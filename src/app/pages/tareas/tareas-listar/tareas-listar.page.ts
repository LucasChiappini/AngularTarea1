import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Tarea } from '../../model/tarea';
import { Router } from '@angular/router';

@Component({
  imports: [DatePipe],
  selector: 'app-tareas-listar',
  styleUrl: './tareas-listar.page.css',
  templateUrl: './tareas-listar.page.html',
})
export class TareasListarPage {
  public tareas: Tarea[] = [
    {
      id_tarea: 1,
      nombre: 'Diseñar interfaz',
      descripcion: 'Crear vistas para listar usuarios y tareas',
      fecha_creada: new Date('2026-03-01'),
    },
    {
      id_tarea: 2,
      nombre: 'Configurar rutas',
      descripcion: 'Añadir redirecciones y navegación',
      fecha_creada: new Date('2026-03-02'),
    },
  ];

  private router = inject(Router);

  public handleClick(event: PointerEvent) {
    console.info('Clickeaste ', { event });
  }

  public goToCrear() {
    this.router.navigate(['/', 'tareas', 'create']);
  }

  public goToEditar(id_tarea: number) {
    this.router.navigate(['/', 'tareas', id_tarea]);
  }

  public finalizar(tarea: Tarea) {
    console.info('Finalizar tarea ', { tarea });
  }

  public eliminar(tarea: Tarea) {
    console.info('Eliminar tarea ', { tarea });
  }

  public irAHome() {
    this.router.navigate(['/home']);
  }
}

export default TareasListarPage;
