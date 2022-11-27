import { UsuarioService } from './usuario/usuario.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  autenticacaoUrl = 'http://localhost:3000/usuarios';
  tokenJWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.cThIIoDvwdueQB468K5xDc5633seEFoqwxjF_xSJyQQ';

  // 'http://localhost:3000/user/login'
  constructor(private httpClient: HttpClient,
    private usuarioService: UsuarioService) { }

  autentica(usuario: string, senha: string): Observable<any> { //Observable<HttResponse<any>> //Para obter o conteudo todo do response{
    // return this.httpClient.post(this.autenticacaoUrl, {
    //   username: usuario,
    //   password: senha
    // },
    //   {
    //     observe: 'response'
    //   }
    // ).pipe(
    //   tap((response) => {
    //     const authToken = response.headers.get('x-acess-token') ?? '';
    //     this.usuarioService.salvaToken(authToken);
    //   })
    // );

    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.tokenJWT);

    return this.httpClient.get(this.autenticacaoUrl + `?username=${usuario}&senha=${senha}`, { 'headers': headers_object })
  }
}
