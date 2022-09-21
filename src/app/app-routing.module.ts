import { HomeComponent } from './home/home.component';
import { BusquedaRutasComponent } from './busqueda-rutas/busqueda-rutas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'ruta/:origen/:destino',
    component: BusquedaRutasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
