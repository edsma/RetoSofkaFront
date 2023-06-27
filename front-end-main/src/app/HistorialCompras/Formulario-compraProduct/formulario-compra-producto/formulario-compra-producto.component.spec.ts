import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCompraProductoComponent } from './formulario-compra-producto.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('FormularioCompraProductoComponent', () => {
  let component: FormularioCompraProductoComponent;
  let fixture: ComponentFixture<FormularioCompraProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCompraProductoComponent ],
      imports: [ReactiveFormsModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCompraProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validateChanges', () => {
    expect(component.guardarCambios()).toBeTruthy();
  });
});
