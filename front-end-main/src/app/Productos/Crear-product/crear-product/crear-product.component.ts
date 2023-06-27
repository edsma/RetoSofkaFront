import { Component, OnInit } from '@angular/core';
import { Products } from '../../Products';
import { ProductService } from '../../products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-product',
  templateUrl: './crear-product.component.html',
  styleUrls: ['./crear-product.component.css']
})
export class CrearProductComponent implements OnInit {

  constructor(private productService: ProductService) { }
  status: boolean= false;
  ngOnInit(): void {
  }

  guardarCambios(product: Products){
    this.status = true;
    this.productService.crear(product)
    .subscribe(() => 
      Swal.fire('Correcto', 'Registro guardado correctamente','success'),
    error =>
      Swal.fire('Error!', 'Ocurrio un error','error'));
      this.status = false;
  }

}
