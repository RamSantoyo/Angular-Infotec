import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  //mostrar los productos como pagina principal
  {
    path: '',
    component: ProductosComponent
  },
  {//pasar parametros
    path: 'detalle/:id/:desc/:precio',
    component: DetalleComponent
  },
  //ruta en caso de no encontrar la ruta
  {
    path: '**',
    component: ProductosComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
