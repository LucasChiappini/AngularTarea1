import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tarea } from '../../model/tarea';
import TareaForm from '../../../components/tarea/tarea.form';

@Component({
  imports: [TareaForm],
  selector: 'app-tareas-editar',
  styleUrl: './tareas-editar.page.css',
  templateUrl: './tareas-editar.page.html',
})
export class TareasEditarPage {
  private route = inject(ActivatedRoute);

  // id_tarea viene en la ruta: /tareas/:id_tarea
  public id_tarea = Number(this.route.snapshot.paramMap.get('id_tarea'));

  // Todavia no hay servicio ni backend: se precarga solo el id de la ruta.
  public tarea: Tarea = {
    id_tarea: this.id_tarea,
    nombre: '',
    descripcion: '',
    fecha_creada: new Date(),
  };

  onGuardarTarea(tarea: Tarea) {
    console.log('TareasEditarPage. onGuardarTarea recibio: ', { tarea });
  }
}

export default TareasEditarPage;
