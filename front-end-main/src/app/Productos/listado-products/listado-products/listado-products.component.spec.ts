import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoProductsComponent } from './listado-products.component';
import { ProductService } from '../../products.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListadoProductsComponent', () => {
  let component: ListadoProductsComponent;
  let fixture: ComponentFixture<ListadoProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoProductsComponent ],
      providers: [ProductService ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create product', () => {
    expect(component.delete("prueba")).toBeTruthy();
  });

  it('should add product', () => {
    expect(component.AddToBuy({enabled: true,inInventory: 100, max: 10,min:1,nameProduct:'Prueba',quantity:2 })).toBeTruthy();
  });

  it('should setItemLocal product', () => {
    expect(component.SetItemsLocalStorage({enabled: true,inInventory: 100, max: 10,min:1,nameProduct:'Prueba',quantity:2 },null)).toBeTruthy();
  });
});
