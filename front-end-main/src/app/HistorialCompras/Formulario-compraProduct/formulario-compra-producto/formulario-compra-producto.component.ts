import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Shopping } from '../../History';
import { DetailShopProduct } from '../../DetailShopProduct';

@Component({
  selector: 'app-formulario-compra-producto',
  templateUrl: './formulario-compra-producto.component.html',
  styleUrls: ['./formulario-compra-producto.component.css']
})
export class FormularioCompraProductoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  form: FormGroup;

  @Output()
  OnSubmit: EventEmitter<Shopping> = new EventEmitter<Shopping>();
  productToBuy : DetailShopProduct[];
  jsonObject;

  ngOnInit(): void {
    var retrievedObject = localStorage.getItem('buyItems');
    this.jsonObject = JSON.parse(retrievedObject);
    this.productToBuy = this.jsonObject;
    this.form = this.formBuilder.group({
      clientName: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      idType: [
        false,
        {
          Validators: [Validators.required],
        },
      ],
      id: [
        0,
        {
          Validators: [Validators.required],
        },
      ],
    });
  }

  guardarCambios() {
    this.OnSubmit.emit(this.form.value);
  }

}
