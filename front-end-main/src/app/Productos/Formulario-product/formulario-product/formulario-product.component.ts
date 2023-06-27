import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Products } from '../../Products';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-product',
  templateUrl: './formulario-product.component.html',
  styleUrls: ['./formulario-product.component.css'],
})
export class FormularioProductComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  form: FormGroup;
  @Input()
  modelo: Products;
  patter = "^[0-9]*$";

  @Output()
  OnSubmit: EventEmitter<Products> = new EventEmitter<Products>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      idProduct: [this.modelo?.idProduct? this.modelo.idProduct: null ],
      nameProduct: [
        '',
        {
          validators: [Validators.required, Validators.pattern('^[a-zA-Z0-9!@#$%^&*()]+$')],
        },
      ],
      inInventory: [
        1,
        {
          Validators: [  Validators.pattern(this.patter),Validators.min(1),Validators.required],
        },
      ],
      enabled: [
        false,
        {
          Validators: [Validators.required],
        },
      ],
      min: [
        1,
        {
          Validators: [  Validators.pattern(this.patter),Validators.min(1), Validators.required],
        },
      ],
      max: [
        1,
        {
          Validators: [  Validators.pattern(this.patter),Validators.max(1),Validators.required],
        },
      ],
    });

    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }

  guardarCambios() {
    if(this.form.get('min').value > 0 
    || this.form.get('min').value > 0
    || this.form.get('inInventory').value > 0){
      this.OnSubmit.emit(this.form.value);
    }else{
      Swal.fire('Cuidado!', 'las cantidades no pueden tener valores negativos','warning');
    }
    
  }
}
