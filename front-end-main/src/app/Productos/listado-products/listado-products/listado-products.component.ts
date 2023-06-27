import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from '../../products.service';
import { Products } from '../../Products';
import { Shopping } from 'src/app/HistorialCompras/History';
import { DetailShopProduct } from 'src/app/HistorialCompras/DetailShopProduct';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-products',
  templateUrl: './listado-products.component.html',
  styleUrls: ['./listado-products.component.css'],
})
export class ListadoProductsComponent implements OnInit {
  constructor(private productService: ProductService) {}
  @Input()
  products: Products[];

  @Input()
  availableModification: boolean;

  ngOnInit(): void {
  }

  @Output()
  borrado: EventEmitter<void> = new EventEmitter<void>();

  delete(productId: string): void {
    this.productService.delete(productId).subscribe(() => this.borrado.emit());
  }

  AddToBuy(product: Products): void {
    if(product.quantity < product.min || product.quantity > product.max){
      Swal.fire('Error!', 'supera los topes permitidos','error');
      return;
    }
    var retrievedObject = localStorage.getItem('buyItems');
    this.SetItemsLocalStorage(product, retrievedObject);
  }

  SetItemsLocalStorage(product: Products, retrievedObject: string) {
    var findObject: DetailShopProduct[] = [];
    if (retrievedObject != null) {
      var jsonObject: DetailShopProduct[] = JSON.parse(retrievedObject);
      findObject = jsonObject.filter(
        (item) => item.idProduct !== product.idProduct
      );
    } 
    findObject.push({
      nameProduct: product.nameProduct,
      quantity: product.quantity,
      idProduct: product.idProduct,
    });
    localStorage.setItem('buyItems', JSON.stringify(findObject));
  }
}
