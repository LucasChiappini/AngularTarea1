import { Component, inject } from '@angular/core';
import { Router } from '@angular/router'; // Importado para la redirección
import { Usuario } from '../../model/usuario';

@Component({
  imports: [],
  selector: 'app-listar-usuarios',
  styleUrl: './listar-usuarios.page.css',
  templateUrl: './listar-usuarios.page.html',
})
export class ListarUsuariosPage {
  public usuarios: Usuario[] = [
    { id_usuario: 1, nombre: 'Jorge', apellido: 'Melnik', username: 'JorgeMelnik' },
    {
      id_usuario: 2,
      nombre: 'Fabian',
      apellido: 'Mac-eachen',
      username: 'fmac',
    },
  ];

  private router = inject(Router);

  public handleClick(event: PointerEvent) {
    console.info('Clickeaste ', { event });
  }

  public goToCrear() {
    this.router.navigate(['/', 'usuarios', 'create']);
  }

  public irAHome() {
    this.router.navigate(['/home']);
  }
}

export default ListarUsuariosPage;
