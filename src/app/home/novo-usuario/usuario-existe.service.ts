import { AbstractControl } from '@angular/forms';
import { NovoUsuarioService } from './novo-usuario.service';
import { Injectable } from '@angular/core';
import { first, map, switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {
  constructor(private NovoUsuarioService: NovoUsuarioService) { }

  usuarioJaExiste(){
    return (control: AbstractControl) => {
      return control.valueChanges.pipe( // vai receber nome do usuario que o usuario digitou e fazer um request para api para validar se ja existe
        switchMap((nomeUsuario) => this.NovoUsuarioService.verificarUsuarioExistente(nomeUsuario)
        ),
        map((usuarioExiste: any) =>
          usuarioExiste.length > 0 ? {usuarioExistente: true} : null
        ),
        first()
      );
    };
  }
}
