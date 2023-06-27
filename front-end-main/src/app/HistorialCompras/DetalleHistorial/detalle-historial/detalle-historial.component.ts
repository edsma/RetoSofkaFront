import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Shopping } from '../../History';
import { Products } from 'src/app/Productos/Products';

@Component({
  selector: 'app-detalle-historial',
  templateUrl: './detalle-historial.component.html',
  styleUrls: ['./detalle-historial.component.css']
})
export class DetalleHistorialComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
  detalleProduct: Shopping;
  products: Products[];
  ngOnInit(): void {
    this.products = [];
    this.activatedRoute.params.subscribe(params => {
      this.detalleProduct =  JSON.parse(atob(params.product));
      this.detalleProduct.detailProduct.forEach(x=> {
        x.product.quantity = x.quantity;
        this.products.push(x.product);
      })
    });
  }

}
