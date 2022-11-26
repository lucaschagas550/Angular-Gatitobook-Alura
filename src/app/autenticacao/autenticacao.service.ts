import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  autenticacaoUrl = 'http://localhost:3000/usuarios';
  tokenJWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.cThIIoDvwdueQB468K5xDc5633seEFoqwxjF_xSJyQQ';

  // 'http://localhost:3000/user/login'
  constructor(private httpClient: HttpClient) { }

  autentica(usuario: string, senha: string): Observable<any> {
    // return this.httpClient.post(this.autenticacaoUrl,{
    //   username: usuario,
    //   password: senha
    // })
    // var headers_object = new HttpHeaders().set("Authorization", "Bearer " + "teste");
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.tokenJWT);

    return this.httpClient.get(this.autenticacaoUrl + `?username=${usuario}&senha=${senha}`, { 'headers': headers_object })
  }
}
