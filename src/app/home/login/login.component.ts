import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = ''
  senha = ''

  //Servico de router para redirecionar para outro componente
  constructor(private authService: AutenticacaoService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.usuario, this.senha);

    this.authService.autentica(this.usuario, this.senha).subscribe(() =>{
      console.log('Autenticado com sucesso');
      this.router.navigateByUrl('animais');
    }, (error) =>{
      alert('Usuario ou senha invalido');
      console.log(error);
    }
    );
  }

}
