import { Component, output, signal } from '@angular/core';
import { Usuario } from '../../pages/model/usuario';
import { form, FormField } from '@angular/forms/signals';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [FormField, JsonPipe],
  selector: 'app-usuario-form',
  styleUrl: './usuario.form.css',
  templateUrl: './usuario.form.html',
})
export class UsuarioForm {
  public usuarioModel = signal<Usuario>({
    id_usuario: 0,
    nombre: 'valor inicial',
    apellido: '',
    username: '',
  });

  public usuarioForm = form(this.usuarioModel);

  public guardarUsuario = output<Usuario>();

  public submitForm(event: Event) {
    event.preventDefault();
    console.log('submit form en usuario form');
    this.guardarUsuario.emit(this.usuarioForm().value());
  }
}

export default UsuarioForm;
