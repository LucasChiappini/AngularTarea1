import { Component, effect, input, output, signal } from '@angular/core';
import { Tarea } from '../../pages/model/tarea';
import { form, FormField } from '@angular/forms/signals';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [FormField, JsonPipe],
  selector: 'app-tarea-form',
  styleUrl: './tarea.form.css',
  templateUrl: './tarea.form.html',
})
export class TareaForm {
  // Tarea con la que se precarga el form (al editar). Al crear no se pasa nada.
  public tareaInicial = input<Tarea>();

  public tareaModel = signal<Tarea>({
    id_tarea: 0,
    nombre: '',
    descripcion: '',
    fecha_creada: new Date(),
  });

  public tareaForm = form(this.tareaModel);

  public guardarTarea = output<Tarea>();

  constructor() {
    effect(() => {
      const tarea = this.tareaInicial();
      if (tarea) {
        this.tareaModel.set({ ...tarea });
      }
    });
  }

  public submitForm(event: Event) {
    event.preventDefault();
    console.log('submit form en tarea form');
    this.guardarTarea.emit(this.tareaForm().value());
  }
}

export default TareaForm;
