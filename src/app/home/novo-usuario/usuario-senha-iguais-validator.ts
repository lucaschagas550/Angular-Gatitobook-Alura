import { FormGroup } from '@angular/forms';

//Formgroup eh o formulario inteiro que eh recebido
export function usuarioSenhaIguaisValidator(formGroup: FormGroup) {
  const username = formGroup.get('userName')?.value ?? ''; // se for undefined vai ser null
  const password = formGroup.get('password')?.value ?? ''; // se for undefined vai ser null

  if (username.trim() + password.trim()) {
    return username !== password ? null : { senhaIgualUsuario: true };
  } else {
    return null;
  }
};
