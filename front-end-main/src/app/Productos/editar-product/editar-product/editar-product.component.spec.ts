import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProductComponent } from './editar-product.component';
import { ProductService } from '../../products.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('EditarProductComponent', () => {
  let component: EditarProductComponent;
  let fixture: ComponentFixture<EditarProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarProductComponent ],
      providers: [ProductService ],
      imports: [HttpClientTestingModule,RouterTestingModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should edit product', () => {
    expect(component.guardarCambios({enabled: true,inInventory: 100, max: 10,min:1,nameProduct:'Prueba',quantity:2 })).toBeTruthy();
  });
});
