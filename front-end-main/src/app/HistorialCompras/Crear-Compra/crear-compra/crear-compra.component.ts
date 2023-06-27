import { Component, OnInit } from '@angular/core';
import { Shopping } from '../../History';
import Swal from 'sweetalert2';
import { HistorialService } from '../../historial.service';
import { DetailShopProduct } from '../../DetailShopProduct';

@Component({
  selector: 'app-crear-compra',
  templateUrl: './crear-compra.component.html',
  styleUrls: ['./crear-compra.component.css']
})
export class CrearCompraComponent implements OnInit {

  constructor(private historyService: HistorialService) { }

  ngOnInit(): void {
  }

  guardarCambios(product: Shopping){
    var retrievedObject = localStorage.getItem('buyItems');
    var jsonObject: DetailShopProduct[] = JSON.parse(retrievedObject);
    product.detailProduct = jsonObject;
    if(jsonObject.length > 0){
      this.historyService.Create(product)
      .subscribe(() => 
      error =>
        Swal.fire('Error!', 'Ocurrio un error','error'));
        localStorage.removeItem('buyItems');
        if(localStorage.getItem('buyItems') == null){
          Swal.fire('Correcto', 'Registro guardado correctamente','success');
        }
    }else{
      Swal.fire('Error!', 'debe añadir items para comprar','error');
    }
  }

}
