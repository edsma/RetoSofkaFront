import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { CrearGeneroComponent } from './generos/crear-genero/crear-genero.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {CrearActorComponent} from './actores/crear-actor/crear-actor.component'
import { IndiceCineComponent } from './cines/indice-cine/indice-cine.component';
import { CrearCineComponent } from './cines/crear-cine/crear-cine.component';
import { CrearPeliculaComponent } from './peliculas/crear-pelicula/crear-pelicula.component';
import { EditarActorComponent } from './actores/editar-actor/editar-actor.component';
import { EditarPeliculaComponent } from './peliculas/editar-pelicula/editar-pelicula.component';
import { EditarCineComponent } from './cines/editar-cine/editar-cine.component';
import { EditarGeneroComponent } from './generos/editar-genero/editar-genero.component';
import { FiltroPeliculasComponent } from './peliculas/filtro-peliculas/filtro-peliculas.component';
import { DetallePeliculaComponent } from './peliculas/detalle-pelicula/detalle-pelicula.component';
import { LoginComponent } from './seguridad/login/login.component';
import { RegistroComponent } from './seguridad/registro/registro.component';
import { IndiceUsuariosComponent } from './seguridad/indice-usuarios/indice-usuarios.component';
import { EditarProductComponent } from './Productos/editar-product/editar-product/editar-product.component';
import { CrearProductComponent } from './Productos/Crear-product/crear-product/crear-product.component';
import { ListadoHistorialComprasComponent } from './HistorialCompras/listado-historial-compras/listado-historial-compras.component';
import { DetalleHistorialComponent } from './HistorialCompras/DetalleHistorial/detalle-historial/detalle-historial.component';
import { CrearCompraComponent } from './HistorialCompras/Crear-Compra/crear-compra/crear-compra.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent}, 
  {path: 'generos', component: IndiceGenerosComponent},
  {path: 'generos/crear', component: CrearGeneroComponent }, 
  {path: 'generos/editar/:id', component: EditarGeneroComponent},

  {path: 'actores', component: IndiceActoresComponent },
  {path: 'actores/crear', component:  CrearActorComponent  },
  {path: 'actores/editar/:id', component:  EditarActorComponent  },

  {path: 'cines', component: IndiceCineComponent },
  {path: 'cine/crear', component: CrearCineComponent},
  {path: 'cine/editar/:id', component: EditarCineComponent },

  {path: 'products/editar/:id', component: EditarProductComponent},
  {path: 'products/crear', component: CrearProductComponent},

  
  {path: 'compras/finalizar', component: CrearCompraComponent},

  {path: 'historial/listar', component: ListadoHistorialComprasComponent},
  {path: 'historial/detalle/:product', component: DetalleHistorialComponent},

  {path: 'peliculas/crear', component: CrearPeliculaComponent },
  {path: 'peliculas/editar/:id', component: EditarPeliculaComponent},
  {path: 'peliculas/buscar', component: FiltroPeliculasComponent},
  {path: 'peliculas/:id', component: DetallePeliculaComponent },
  {path: 'login', component: LoginComponent},
  {path: 'registro', component:RegistroComponent},
  {path: 'usuarios', component:IndiceUsuariosComponent},
  {path: '**',redirectTo:''},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
