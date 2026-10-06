import { Component } from '@angular/core';
import { Tarea } from '../../model/tarea';
import TareaForm from '../../../components/tarea/tarea.form';

@Component({
  imports: [TareaForm],
  selector: 'app-tareas-crear',
  styleUrl: './tareas-crear.page.css',
  templateUrl: './tareas-crear.page.html',
})
export class TareasCrearPage {
  onGuardarTarea(tarea: Tarea) {
    console.log('TareasCrearPage. onGuardarTarea recibio: ', { tarea });
  }
}

export default TareasCrearPage;
