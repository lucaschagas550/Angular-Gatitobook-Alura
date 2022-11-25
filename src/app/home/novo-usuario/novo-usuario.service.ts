import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoUsuario } from './novo-usuario';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {
  cadastrarUsuarioUrlAPI = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) { }

  cadastraNovoUsuario(novoUsuario: NovoUsuario){
    return this.http.post(this.cadastrarUsuarioUrlAPI, novoUsuario)
  };

  verificarUsuarioExistente(nomeUsuario: string){
    console.log(`${this.cadastrarUsuarioUrlAPI}?userName=${nomeUsuario}`);
    return this.http.get(`${this.cadastrarUsuarioUrlAPI}?username=${nomeUsuario}`)
  }
}
