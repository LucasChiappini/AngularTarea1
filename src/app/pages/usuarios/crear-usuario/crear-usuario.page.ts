import { Component, signal } from '@angular/core';
import { Usuario } from '../../model/usuario';
import { form, FormField } from '@angular/forms/signals';
import UsuarioForm from '../../../components/usuario/usuario.form';

@Component({
  imports: [UsuarioForm], // Seria para lo de los terminos y condiciones y cositas asi
  selector: 'app-crear-usuario',
  styleUrl: './crear-usuario.page.css',
  templateUrl: './crear-usuario.page.html',
})
export class CrearUsuarioPage {
  onGuardarUsuario(usuario: Usuario) {
    console.log('CrearUsuarioPage. onCrearUsuario  recibio: ', { usuario });
  }
}

export default CrearUsuarioPage;
