import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensagemComponent } from './mensagem.component';

@NgModule({
  declarations: [
    MensagemComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ //Exporta o MensagemComponent para assim podermos setar a mensagem de erro em outros componentes
    MensagemComponent,
  ]
})
export class MensagemModule { }
