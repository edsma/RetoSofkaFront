import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../products.service';
import { Products } from '../../Products';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-product',
  templateUrl: './editar-product.component.html',
  styleUrls: ['./editar-product.component.css']
})
export class EditarProductComponent implements OnInit {

  constructor(private productService: ProductService,
    private activatedRoute: ActivatedRoute) { }
  product: Products;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.productService.GetProductsById(params.id)
      .subscribe(productPutGet => {
        this.product = productPutGet;
      });
    });
  }

  guardarCambios(product: Products){
    this.productService.update(product)
      .subscribe(productPutGet => {
        Swal.fire('Exitoso', 'Información actualizada','success');
      });
  }

}
