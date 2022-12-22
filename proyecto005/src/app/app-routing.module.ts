import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DadosComponent } from './dados/dados.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
{
  path: 'dados',
  component: DadosComponent
},
{
  path: 'usuario',
  component: UsuarioComponent
},
//si no se encuentra ninguna ruta, redirigir a la ruta por defecto
{
  path: '**',
  redirectTo: 'usuario'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
