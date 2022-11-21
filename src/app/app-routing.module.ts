import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", pathMatch: 'full', redirectTo: 'home'},
  {path: "home", loadChildren: ()=> import('./home/home.module').then((m) => m.HomeModule)}, //lazyload => carregamento sobre demanda
  {path: "animais", loadChildren: ()=> import('./animais/animais.module').then((m) => m.AnimaisModule)}, //lazyload => carregamento sobre demanda
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
