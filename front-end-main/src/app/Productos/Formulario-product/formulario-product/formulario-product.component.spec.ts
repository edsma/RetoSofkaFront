import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioProductComponent } from './formulario-product.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('FormularioProductComponent', () => {
  let component: FormularioProductComponent;
  let fixture: ComponentFixture<FormularioProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioProductComponent ],
      imports: [ReactiveFormsModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should validateChangesProduct', () => {
    expect(component.guardarCambios()).toBeTruthy();
  });
});
