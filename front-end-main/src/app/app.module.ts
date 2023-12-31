import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoPeliculasComponent } from './peliculas/listado-peliculas/listado-peliculas.component';
import { ListadoGenericoComponent } from './utilidades/listado-generico/listado-generico.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './utilidades/rating/rating.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CrearGeneroComponent } from './generos/crear-genero/crear-genero.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { CrearActorComponent } from './actores/crear-actor/crear-actor.component';
import { CrearPeliculaComponent } from './peliculas/crear-pelicula/crear-pelicula.component';
import { CrearCineComponent } from './cines/crear-cine/crear-cine.component';
import { IndiceCineComponent } from './cines/indice-cine/indice-cine.component';
import { EditarActorComponent } from './actores/editar-actor/editar-actor.component';
import { EditarGeneroComponent } from './generos/editar-genero/editar-genero.component';
import { EditarCineComponent } from './cines/editar-cine/editar-cine.component';
import { EditarPeliculaComponent } from './peliculas/editar-pelicula/editar-pelicula.component'; 
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MarkdownModule} from 'ngx-markdown';
import { FormularioGeneroComponent } from './generos/formulario-genero/formulario-genero.component';
import { FiltroPeliculasComponent } from './peliculas/filtro-peliculas/filtro-peliculas.component';
import { FormularioActoresComponent } from './actores/formulario-actores/formulario-actores.component';
import { InputImgComponent } from './utilidades/input-img/input-img.component';
import {InputMarkdownComponent} from './utilidades/input-markdown/input-markdown.component';
import { FormularioCineComponent } from './cines/formulario-cine/formulario-cine.component';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import { MapaComponent } from './utilidades/mapa/mapa.component';
import { FormularioPeliculaComponent } from './peliculas/formulario-pelicula/formulario-pelicula.component';
import { SelectorMultipleComponent } from './utilidades/selector-multiple/selector-multiple.component';
import { AutocompleteActoresComponent } from './actores/autocomplete-actores/autocomplete-actores.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { MostrarErroresComponent } from './utilidades/mostrar-errores/mostrar-errores.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { DetallePeliculaComponent } from './peliculas/detalle-pelicula/detalle-pelicula.component';
import { AutorizadoComponent } from './seguridad/autorizado/autorizado.component';
import { LoginComponent } from './seguridad/login/login.component';
import { RegistroComponent } from './seguridad/registro/registro.component';
import { FormularioAutenticacionComponent } from './seguridad/formulario-autenticacion/formulario-autenticacion.component';
import { SeguridadInterceptorService } from './seguridad/seguridad-interceptor.service';
import { IndiceUsuariosComponent } from './seguridad/indice-usuarios/indice-usuarios.component';
import { ListadoProductsComponent } from './Productos/listado-products/listado-products/listado-products.component';
import { EditarProductComponent } from './Productos/editar-product/editar-product/editar-product.component';
import { CrearProductComponent } from './Productos/Crear-product/crear-product/crear-product.component';
import { FormularioProductComponent } from './Productos/Formulario-product/formulario-product/formulario-product.component';
import { ListadoHistorialComprasComponent } from './HistorialCompras/listado-historial-compras/listado-historial-compras.component';
import { DetalleHistorialComponent } from './HistorialCompras/DetalleHistorial/detalle-historial/detalle-historial.component';
import { FormularioCompraProductoComponent } from './HistorialCompras/Formulario-compraProduct/formulario-compra-producto/formulario-compra-producto.component';
import { CrearCompraComponent } from './HistorialCompras/Crear-Compra/crear-compra/crear-compra.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoPeliculasComponent,
    ListadoGenericoComponent,
    MenuComponent,
    RatingComponent,
    LandingPageComponent,
    CrearGeneroComponent,
    IndiceGenerosComponent,
    IndiceActoresComponent,
    CrearActorComponent,
    CrearPeliculaComponent,
    CrearCineComponent,
    IndiceCineComponent,
    EditarActorComponent,
    EditarGeneroComponent,
    EditarCineComponent,
    EditarPeliculaComponent,
    EditarProductComponent,
    FormularioGeneroComponent,
    FiltroPeliculasComponent,
    FormularioActoresComponent,
    InputImgComponent,
    InputMarkdownComponent,
    FormularioCineComponent,
    MapaComponent,
    FormularioPeliculaComponent,
    SelectorMultipleComponent,
    AutocompleteActoresComponent,
    MostrarErroresComponent,
    DetallePeliculaComponent,
    AutorizadoComponent,
    LoginComponent,
    RegistroComponent,
    FormularioAutenticacionComponent,
    IndiceUsuariosComponent,
    ListadoProductsComponent,
    CrearProductComponent,
    FormularioProductComponent,
    ListadoHistorialComprasComponent,
    DetalleHistorialComponent,
    FormularioCompraProductoComponent,
    CrearCompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    MarkdownModule.forRoot(),
    SweetAlert2Module.forRoot(),
    FormsModule,
    LeafletModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: SeguridadInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
