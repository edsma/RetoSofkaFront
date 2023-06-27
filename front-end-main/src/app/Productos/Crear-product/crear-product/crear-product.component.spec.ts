import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearProductComponent } from './crear-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('CrearProductComponent', () => {
  let component: CrearProductComponent;
  let fixture: ComponentFixture<CrearProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearProductComponent ],
      imports: [ReactiveFormsModule,HttpClientModule],
      providers: [HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create product', () => {
    expect(component.guardarCambios({enabled: true,inInventory: 100, max: 10,min:1,nameProduct:'Prueba',quantity:2 })).toBeTruthy();
  });
});
