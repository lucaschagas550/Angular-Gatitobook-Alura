import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  autenticacaoUrl = 'http://localhost:3000/usuarios';
  // 'http://localhost:3000/user/login'
  constructor(private httpClient: HttpClient) { }

  autentica(usuario: string, senha: string) : Observable<any>{
    // return this.httpClient.post(this.autenticacaoUrl,{
    //   username: usuario,
    //   password: senha
    // })
    return this.httpClient.get(this.autenticacaoUrl + `?username=${usuario}&senha=${senha}`)
  }
}
