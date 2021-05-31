import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccesoriosComponent } from './paginas/accesorios/accesorios.component';
import { AceroComponent } from './paginas/acero/acero.component';
import { ComocomprarComponent } from './paginas/comocomprar/comocomprar.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { InsumosnailsComponent } from './paginas/insumosnails/insumosnails.component';
import { MakeupComponent } from './paginas/makeup/makeup.component';
import { MarroquineriaComponent } from './paginas/marroquineria/marroquineria.component';
import { PerfumesComponent } from './paginas/perfumes/perfumes.component';
import { SkincareComponent } from './paginas/skincare/skincare.component';

const routes: Routes = [
  {
    path:"inicio",component:InicioComponent
  },
  {
    path:"contacto",component:ContactoComponent
  },
  {
    path:"comocomprar",component:ComocomprarComponent
  },
  {
    path:"accesorios",component:AccesoriosComponent
  },
  {
    path:"acero",component:AceroComponent
  },
  {
    path:"insumosnails",component:InsumosnailsComponent
  },
  {
    path:"makeup",component:MakeupComponent
  },
  {
    path:"perfumes",component:PerfumesComponent
  },
  {
    path:"marroquineria",component:MarroquineriaComponent
  },
  {
    path:"skincare",component:SkincareComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
